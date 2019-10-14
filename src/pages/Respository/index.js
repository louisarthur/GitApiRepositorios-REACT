import React, { Component } from 'react';
import ApiGit from '../../services/gitapi';
import PropTypes from 'prop-types';
import { Loading, Owner, IssueList } from './styles';
// desestruturando o parametro recebido props, que tem o match
import { Link } from 'react-router-dom';
import Container from '../../component/Container/index';
import { FaSpinner } from 'react-icons/fa';

export default class Repository extends Component {
  // parametros recebidos através da url recebidos através do router dom
  // estaremos validando pelo proptypes
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    // essa propriedade está vindo do parametro que está sendo lançado da rota.
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      ApiGit.get(`/repos/${repoName}`),
      ApiGit.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);
    // só vai concluir tudo ao mesmo tempo, por isso a promise
    // lembrar que é uma requisição axios, por isso o .data
    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          Carregando
          <FaSpinner size={80} />
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar Página</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}

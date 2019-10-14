import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GitApi from '../../services/gitapi';
import Container from '../../component/Container/index';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };
  // pegando do localstorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }
  // salvando o localstorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleStateChange = w => {
    this.setState({ newRepo: w.target.value });
  };
  handleSubmitState = async w => {
    w.preventDefault();
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const resApi = await GitApi.get(`/repos/${newRepo}`);

    const repoName = {
      name: resApi.data.full_name,
    };
    this.setState({
      repositories: [...repositories, repoName],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithub />
          Respositórios
        </h1>
        <Form onSubmit={this.handleSubmitState}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleStateChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#ffff" size={15} />
            ) : (
              <FaPlus color="#ffff" size={15} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              {/* encode substitui a barra por um porcetagem */}
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

// quando um componente tiver mais de 2 níveis de
// encadeamento é melhor fazer um componente

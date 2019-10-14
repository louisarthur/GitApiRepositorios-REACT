import styled, { keyframes, css } from 'styled-components';
// string abaixo, podemos controlar o css com ifs através de propriedades das
//components criados.
// o terceiro elemento da box shadow é o blur;
// margin auto é para preencher tudo;
export const Form = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eeee;
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 18px;
  }
`;
// criando a animação para rotacionar o spinner
const rotate = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;
// adicionando propriedade pelo css no titulo com o attrs
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #f21349;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  /* align center the plus */
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  font-size: 17px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #f98512;
    /* ex li
      li
      li
      li
      li */
    & + li {
      border-top: 1px solid #ff578323;
    }
  }
  a {
    color: #f98512;
    text-decoration: none;
  }
`;

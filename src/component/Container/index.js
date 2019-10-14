import styled from 'styled-components';
const Container = styled.div`
  max-height: 1000px;
  background: #184344;

  font-family: Arial, Helvetica, sans-serif;
  margin: 80px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0.1);
  h1 {
    color: ${props => (props.error ? 'red' : '#f98512')};
    font-size: 25px;
    /* align the icon with the word */
    display: flex;
    flex-direction: row;
    align-items: center;
    /* svg é o icone */
    svg {
      margin-right: 10px;
    }
  }
`;
export default Container;

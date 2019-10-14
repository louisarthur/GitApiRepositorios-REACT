import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;

// attrs(props => ({
//   type: 'submit',
//   disabled: props.loading,
// }))`
export const Loading = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #f98512;
    font-size: 14px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    color: #eeee;
    font-size: 30px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 15px;
    color: #eeeeeeee;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eeeeee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eeeeee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eeeeee;
    }

    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 20px;
        a {
          text-decoration: none;
          color: #eeeeeeee;
          &:hover {
            color: #f98512;
          }
        }
        span {
          background: #eeeeee;
          color: #3333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          line-height: 15px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999999;
      }
    }
  }
`;

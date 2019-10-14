import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  html,body,#root{
    min-height:100%;
  }
  body{
    background: #f21349;
    -webkit-font-smoothing: antialiased !important;
  }
  body,input,button{
    color:#222;
    font-size:14px;
    font-family:Arial, Helvetica, sans-serif;
  }
  button{
    cursor: pointer;
  }
`;
//  se a nossa div tem 280px de largura e dermos um padding, teremos 300 px, entretanto
// se utilizarmos o boxzing:border-box, ele espremera os itens dentro
//da div e o interior ficará em 260px;

// webkit-font-smoothing ele deixa as fontes bem definidas, as letras
// geralmente os navegadores tentarão mudar isso, por isso colocaremos important;

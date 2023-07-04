import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
   
  }

  [data-theme="light"] {
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 44%, rgba(0,212,255,1) 100%);
  
    
  }
  
  [data-theme="dark"] {
    background: rgb(9,121,77);
    background: linear-gradient(90deg, rgba(9,121,77,1) 26%, rgba(157,208,255,1) 45%, rgba(0,212,255,1) 100%);
  }
`;

export default Global;

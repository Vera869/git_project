import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
         monospace;
   }
   * {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
   }

   *:before,
   *:after {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
   }

   a,
   a:visited {
      text-decoration: none;
      cursor: pointer;
   }

   button,
   ._btn {
      cursor: pointer;
   }

   // ul li {
   //    list-style: none;
   // }

   @font-face {
      font-family: 'Montserrat';
      src:
        url('/fonts/Montserrat-Italic-VariableFont_wght') format('ttf'),
        url('/fonts/Montserrat-VariableFont_wght') format('ttf');
      font-weight: 400;
      font-style: normal;
      
      font-color: #0000;
    }

   html,
   body {
      font-family: 'Montserrat';
      width: 100%;
      height: 100%;
      color: #0000;
      font-weight: 400;
      font-style: normal;
      font-size: 24px;
      font-weight: bold;
      background-color: #c2f5ff;
   }
   `
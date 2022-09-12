import { createGlobalStyle } from "styled-components";
import Bold from "./assets/fonts/static/JetBrainsMono-Bold.ttf";
import BoldItalic from "./assets/fonts/static/JetBrainsMono-BoldItalic.ttf";
import BoldVariable from "./assets/fonts/JetBrainsMono-VariableFont_wght.ttf";
import BoldItalicVariable from "./assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
  /*@font-face {
    font-family: "JetBrains Mono Bold";
    src: url(${Bold}) format("truetype");
  }
  @font-face {
    font-family: "JetBrains Mono Bold";
    font-style: italic;
    src: url(${BoldItalic}) format("truetype");
  }*/
  @font-face {
    font-family: "JetBrains Mono Bold";
    src: url(${BoldVariable});
    font-weight: 100 900;
  }
  @font-face {
    font-family: "JetBrains Mono Bold";
    font-style:italic;
    src: url(${BoldItalicVariable});
  }

  body {
    font-family: "JetBrains Mono Bold";
    background-color: ${({ theme }) => theme.colors.veryDarkGrey}
  }
`;

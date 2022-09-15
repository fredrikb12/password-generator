import { createGlobalStyle } from "styled-components";
import BoldVariable from "./assets/fonts/JetBrainsMono-VariableFont_wght.ttf";
import BoldItalicVariable from "./assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
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

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "JetBrains Mono Bold";
    background-color: ${({ theme }) => theme.colors.veryDarkGrey}
  }

  .large-font {
    font-family: ${({ theme }) => theme.fonts.large.font};
    font-size: ${({ theme }) => theme.fonts.large.fontSize};
    line-height: ${({ theme }) => theme.fonts.large.lineHeight};
  }

  .medium-font  {
    font-family: ${({ theme }) => theme.fonts.medium.font};
    font-size: ${({ theme }) => theme.fonts.medium.fontSize};
    line-height: ${({ theme }) => theme.fonts.medium.lineHeight};
  }

  .body-font {
    font-family: ${({ theme }) => theme.fonts.body.font};
    font-size: ${({ theme }) => theme.fonts.body.fontSize};
    line-height: ${({ theme }) => theme.fonts.body.lineHeight};
  }
`;

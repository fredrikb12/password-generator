import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  const theme = {
    colors: {
      neonGreen: "#A4FFAF",
      red: "#F64A4A",
      orange: "#fb7c58",
      yellow: "#f8cd65",
      veryDarkGrey: "#18171f",
      dimWhite: "#e6e5ea",
      grey: "#817d92",
      darkGrey: "#24232c",
    },
    fonts: {
      large: {
        font: "JetBrains Mono Bold",
        fontSize: "32px",
        lineHeight: "43px",
      },
      medium: {
        font: "JetBrains Mono Bold",
        fontSize: "24px",
        lineHeight: "31px",
      },
      body: {
        font: "JetBrains Mono Bold",
        fontSize: "18px",
        lineHeight: "23px",
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;

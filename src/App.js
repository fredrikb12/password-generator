import { ThemeProvider } from "styled-components";
import PasswordGenerator from "./components/PasswordGenerator";
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
    icons: {
      copy: {
        filters: {
          hover:
            "brightness(0) saturate(100%) invert(100%) sepia(84%) saturate(110%) hue-rotate(192deg) brightness(112%) contrast(100%)",
        },
        width: {
          mobile: "17.5px",
          regular: "21px",
        },
        height: {
          mobile: "20px",
          regular: "24px",
        },
      },
      arrow: {
        filters: {
          hover:
            "brightness(0) saturate(100%) invert(84%) sepia(42%) saturate(354%) hue-rotate(67deg) brightness(101%) contrast(104%);",
        },
        width: {
          mobile: "11px",
          regular: "11px",
        },
        height: {
          mobile: "12px",
          regular: "12px",
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PasswordGenerator />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Router from "./Router";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

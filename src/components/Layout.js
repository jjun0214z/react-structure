import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "common/styles/theme";
import GlobalStyle from "common/styles/globalStyle";
import ConfigureRouter from "routes/ConfigureRouter";
import Navigation from "components/Navigation";

export default ({ router }) => (
  <ThemeProvider theme={theme}>
    <div className="wrap">
      <GlobalStyle />
      <Navigation />
      <ConfigureRouter router={router} />
    </div>
  </ThemeProvider>
);

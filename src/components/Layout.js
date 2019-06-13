import React from "react";
import "reset-css";
import styled, { ThemeProvider } from "styled-components";
import theme from "common/theme/";
import ConfigureRouter from "routes/ConfigureRouter";
import Navigation from "components/Navigation";

export default ({ router }) => (
  <ThemeProvider theme={theme}>
    <div className="wrap">
      <Navigation />
      <ConfigureRouter router={router} />
    </div>
  </ThemeProvider>
);

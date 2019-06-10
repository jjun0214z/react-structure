import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

export default ({ history, Layout }) => (
  <ConnectedRouter history={history}>
    <Route
      render={props => {
        return <Layout router={props} />;
      }}
    />
  </ConnectedRouter>
);

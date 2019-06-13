import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "pages/main";

const ConfigureRouter = ({ router }) => {
  return (
    <Switch>
      <Route exact path="/" component={main} />
    </Switch>
  );
};

export default ConfigureRouter;

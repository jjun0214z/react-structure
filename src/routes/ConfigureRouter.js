import React from "react";
import { Route, Switch } from "react-router-dom";
import samplePage1 from "pages/samplePage1";

const ConfigureRouter = ({ router }) => {
  const { pathname } = router.location;
  return (
    <Switch>
      <Route exact path={pathname} component={samplePage1} />
    </Switch>
  );
};

export default ConfigureRouter;

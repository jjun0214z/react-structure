import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "pages/main";
import samplePage1 from "pages/samplePage1";
import samplePage2 from "pages/samplePage2";
import samplePage3 from "pages/samplePage3";

const ConfigureRouter = ({ router }) => {
  const { pathname } = router.location;
  console.log(router);
  return (
    <Switch>
      <Route exact path="/" component={main} />
      <Route path="/samplePage1" component={samplePage1} />
      <Route path="/samplePage2" component={samplePage2} />
      <Route path="/samplePage3" component={samplePage3} />
    </Switch>
  );
};

export default ConfigureRouter;

import React from "react";
import "reset-css";
import ConfigureRouter from "routes/ConfigureRouter";
import Navigation from "components/Navigation";

export default ({ router }) => (
  <div className="wrap">
    <Navigation />
    <ConfigureRouter router={router} />
  </div>
);

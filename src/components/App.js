import React from "react";
import { Provider } from "react-redux";
import store, { history } from "redux/configureStore";
import RouterApp from "routes/RouterApp";
import Layout from "components/Layout";

export default () => (
  <Provider store={store}>
    <RouterApp history={history} Layout={Layout} />
  </Provider>
);

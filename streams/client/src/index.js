import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDom.render(
  <Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);

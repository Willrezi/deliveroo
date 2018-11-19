import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StripeProvider } from "react-stripe-elements";

ReactDOM.render(
  <StripeProvider apiKey="pk_test_fsgLt02VE5qmVFwDwtU4oK5o">
    <App />
  </StripeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

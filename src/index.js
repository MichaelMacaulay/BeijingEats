import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Lading.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} />
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, withRouter } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}></Route>
  </Router>,
app);

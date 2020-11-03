import React from "react";
import { Switch, Router } from "react-router";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from "./Components/ScrollToTop";
import { TestView1, TestView2 } from "./Views";

const browserHistory = createBrowserHistory();
require("../favicon.ico");

const App = () => (
  <Router history={browserHistory}>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" render={(props) => <TestView1 {...props} />} />
        <Route exact path="/2" render={(props) => <TestView2 {...props} />} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;

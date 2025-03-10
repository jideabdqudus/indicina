import React, { Fragment } from "react";
import Home from "./pages/Home";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Team from "./pages/Team";
const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Products} path="/products" />
          <Route exact component={Team} path="/team" />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;

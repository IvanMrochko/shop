import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Categories from "./Categories";
import Basket from "./CheckOut";
import ProductContainer from "./Product";

class AppRouter extends Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Categories} />

        <Route path="/products/:id" component={ProductContainer} />
        <Route exact path="/check-out" component={Basket} />
      </Switch>
    );
  }
}

export default AppRouter;

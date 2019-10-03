import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homepage/homepage";
import "./App.css";

import ShopPage from "./components/pages/shop/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

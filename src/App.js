import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/BurgerBuilder/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/BurgerBuilder/Orders/Orders";

import SignUpContainer from "./containers/BurgerBuilder/SignUpContainer/SignUpContainer";
import LogInContainer from "./containers/BurgerBuilder/LogInContainer/LogInContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          {/* but single slash renders everything that starts from slash, thats why we put it in switch and place it to be the first one */}
          <Route path={"/orders"} component={Orders} />
          <Route path={"/signup"} component={SignUpContainer} />
          <Route path={"/login"} component={LogInContainer} />
          <Route path="/" component={BurgerBuilder} />
          {/* we leave it with just one slash, so it would be loaded by default once we open our App */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

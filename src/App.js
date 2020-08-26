import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/BurgerBuilder/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/BurgerBuilder/Orders/Orders";
import LoginReduxForm from "./containers/BurgerBuilder/LogIn/LogIn";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />{" "}
          {/* but single slash renders everything that starts from slash, thats why we put it in switch and place it to be the first one */}{" "}
          <Route path={"/orders"} component={Orders} />{" "}
          <Route path={"/login"} component={LoginReduxForm} />{" "}
          <Route path="/" component={BurgerBuilder} />{" "}
          {/* we leave it with just one slash, so it would be loaded by default once we open our App */}{" "}
        </Switch>{" "}
      </Layout>{" "}
    </div>
  );
}

export default App;

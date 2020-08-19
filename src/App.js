import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/BurgerBuilder/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>{" "}
    </div>
  );
}

export default App;

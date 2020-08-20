import React from "react";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let item of query) {
      //[item is ['salad', '1'], ['bacon', '0'] .... ]
      ingredients[item[0]] = +item[1];
    }
    this.setState({ ingredients: ingredients });
  }
  continueCheckout = () => {
    this.props.history.replace("/checkout/contact-data"); //we recieve special params. In history there is replace. it replaces current url to following
  };
  cancelCheckout = () => {
    this.props.history.goBack();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <CheckoutSummary
          continueCheckout={this.continueCheckout}
          cancelCheckout={this.cancelCheckout}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}
export default Checkout;

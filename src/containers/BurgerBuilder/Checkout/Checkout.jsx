import React from "react";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    for (let item of query) {
      if (item.includes("totalPrice")) {
        totalPrice = +item[1];
      } else {
        //[item is ['salad', '1'], ['bacon', '0'] .... ]
        ingredients[item[0]] = +item[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: totalPrice });
  }
  continueCheckout = () => {
    this.props.history.replace("/checkout/contact-data"); //we recieve special params. In history there is replace. it replaces current url to following
  };
  cancelCheckout = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          continueCheckout={this.continueCheckout}
          cancelCheckout={this.cancelCheckout}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkout;

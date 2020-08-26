import React from "react";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends React.Component {
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
          ingredients={this.props.ingredients}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.props.ingredients}
              totalPrice={this.props.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps, null)(Checkout);

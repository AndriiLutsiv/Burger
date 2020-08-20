import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../../../components/Burger/Burger";

class CheckoutSummary extends React.Component {
  render() {
    return (
      <div>
        <h1>Enjoy your meal!</h1>
        <div>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <div className={classes.btnLocation}>
          <button
            onClick={this.props.continueCheckout}
            className={classes.continue}
          >
            CONTINUE
          </button>
          <button
            onClick={this.props.cancelCheckout}
            className={classes.cancel}
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}
export default CheckoutSummary;

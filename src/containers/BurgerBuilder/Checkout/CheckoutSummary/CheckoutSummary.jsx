import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../../../components/Burger/Burger";
import Button from "../../../../components/common/Button";

class CheckoutSummary extends React.Component {
  render() {
    return (
      <div className={classes.CheckoutSummary}>
        <h1>Enjoy your meal!</h1>
        <div
          style={{
            width: "300px",
            height: "300px",
            margin: "auto",
            position: "relative",
          }}
        >
          <Burger ingredients={this.props.ingredients} />
        </div>
        <Button btnType={"Continue"} />
        <Button btnType={"Cansel"} />
      </div>
    );
  }
}
export default CheckoutSummary;

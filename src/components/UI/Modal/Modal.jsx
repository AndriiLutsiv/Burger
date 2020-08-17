import React from "react";
import classes from "../Modal/Modal.module.css";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";
const Modal = (props) => {
  return (
    <div className={props.orderActive ? classes.Modal : classes.Hide}>
      {props.orderActive ? (
        <OrderSummary
          ingredients={props.ingredients}
          cancelOrder={props.cancelOrder}
          continueOrder={props.continueOrder}
          totalPrice={props.totalPrice}
        />
      ) : null}
    </div>
  );
};
export default Modal;

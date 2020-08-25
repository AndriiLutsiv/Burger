import React from "react";
import classes from "../Modal/Modal.module.css";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";
import { connect } from "react-redux";
import * as actionCreators from "../../../reduxStore/burgerPage/burger-actionCreators";
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
const mapStateToProps = (state) => {
  return { orderActive: state.orderActive };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cancelOrder: () => {
      dispatch(actionCreators.cancelOrderAC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);

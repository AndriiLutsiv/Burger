import React from "react";
import Button from "../../common/Button";
const OrderSummary = (props) => {
  const orderList = Object.keys(props.ingredients).map((el, index) => {
    return (
      <li key={index}>
        <span style={{ textTransform: "capitalize" }}>
          {el + ":" + " " + props.ingredients[el]}
        </span>
      </li>
    );
  });

  return (
    <>
      <h2>Your order</h2>
      <div>Burger with the following ingredients:</div>
      <div>
        <ul>{orderList}</ul>
      </div>
      <span style={{ textDecoration: "underline" }}>
        Total price: {props.totalPrice.toFixed(2)}
      </span>
      <Button continueOrder={props.continueOrder} btnType={"Continue"} />
      <Button cancelOrder={props.cancelOrder} btnType={"Cansel"} />
    </>
  );
};
export default OrderSummary;

import React from "react";
import HocAux from "../../../hoc/HocAux";
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
    <HocAux>
      <h2>Your order</h2>
      <div>Burger with the following ingredients:</div>
      <div>
        <ul>{orderList}</ul>
      </div>
      <Button continueOrder={props.continueOrder} btnType={"Continue"} />
      <Button cancelOrder={props.cancelOrder} btnType={"Cansel"} />
      <div>
        {/* <button onClick={props.deactivateOrder}>cansel order</button> */}
      </div>
    </HocAux>
  );
};
export default OrderSummary;

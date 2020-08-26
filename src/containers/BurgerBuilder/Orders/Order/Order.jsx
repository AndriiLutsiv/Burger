import React from "react";
import classes from "./Order.module.css";
const Order = (props) => {
  console.log(props);
  let i = props.ingredients;
  let q = props.quantity;
  let p = props.price;
  return (
    <div className={classes.Order}>
      <div className={classes.Row}>
        Burger with:
        {` ${i[0]}(${q[0]}), ${i[1]}(${q[1]}), ${i[2]}(${q[2]}), ${i[3]}(${q[3]})`}{" "}
      </div>
      <div style={{ fontSize: "20px" }}>
        Price.............
        <strong style={{ fontSize: "20px" }}>
          {Number.parseFloat(p).toFixed(2)}$
        </strong>
      </div>
    </div>
  );
};
export default Order;

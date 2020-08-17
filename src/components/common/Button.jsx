import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  let b = null;
  if (props.btnType === "Continue") {
    b = (
      <button className={classes.continue} onClick={props.continueOrder}>
        CONTINUE{" "}
      </button>
    );
  } else if (props.btnType === "Cansel") {
    b = (
      <button className={classes.cancel} onClick={props.cancelOrder}>
        CANCEL{" "}
      </button>
    );
  }
  return <> {b} </>;
};
export default Button;

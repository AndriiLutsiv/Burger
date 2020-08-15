import React from "react";
import classes from "../BuildControl/BuildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div>{props.name}</div>
      <button
        disabled={props.ingredientsIfThree}
        className={classes.Add}
        onClick={props.addIngredient}
      >
        Add ingredient
      </button>
      <button
        disabled={props.ingredientsIfZero}
        className={classes.Remove}
        onClick={props.removeIngredient}
      >
        Remove ingredient
      </button>
    </div>
  );
};
export default BuildControl;

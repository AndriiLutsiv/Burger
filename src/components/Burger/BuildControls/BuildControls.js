import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.module.css";
const options = [
  { name: "Salad", type: "salad" },
  { name: "Meat", type: "meat" },
  { name: "Cheese", type: "cheese" },
  { name: "Bacon", type: "bacon" },
];
const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div className={classes.TotalPrice}>
        You will pay {props.totalPrice.toFixed(2)}$
      </div>
      {options.map((el) => {
        return (
          <BuildControl
            key={el.name}
            name={el.name}
            addIngredient={() => props.addIngredient(el.type)}
            removeIngredient={() => props.removeIngredient(el.type)}
            ingredientsIfZero={
              props.ingredientsIfZero[el.type] === 0 ? true : false
            }
            ingredientsIfThree={
              props.ingredientsIfThree[el.type] === 3 ? true : false
            }
          />
        );
      })}
    </div>
  );
};
export default BuildControls;

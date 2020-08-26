import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.module.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../reduxStore/burgerPage/burger-actionCreators";
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
        To be paid {props.totalPrice.toFixed(2)}$
      </div>
      {options.map((el) => {
        return (
          <BuildControl
            key={el.name}
            name={el.name}
            addIngredient={() => props.addIngredient(el.type)}
            removeIngredient={() => props.removeIngredient(el.type)}
            ingredientsIfZero={
              //we recieve ingredients in props, if > 3 or 0 button is disabled
              props.ingredientsIfZero[el.type] === 0 ? true : false
            }
            ingredientsIfThree={
              props.ingredientsIfThree[el.type] === 3 ? true : false
            }
          />
        );
      })}
      <div>
        <button
          onClick={props.activateOrder}
          className={classes.orderButton}
          disabled={props.purchasable}
        >
          Make order
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    activateOrder: () => {
      dispatch(actionCreators.activateOrderAC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);

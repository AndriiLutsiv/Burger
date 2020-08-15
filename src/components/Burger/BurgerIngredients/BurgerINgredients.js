import React from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";
const BurgerIngredient = (props) => {
  let ingredient = null;
  if (props.type === "bread-bottom") {
    ingredient = <div className={classes.BreadBottom}> </div>;
  } else if (props.type === "bread-top") {
    ingredient = <div className={classes.BreadTop}></div>;
  } else if (props.type === "meat") {
    ingredient = <div className={classes.Meat}></div>;
  } else if (props.type === "cheese") {
    ingredient = <div className={classes.Cheese}></div>;
  } else if (props.type === "bacon") {
    ingredient = <div className={classes.Bacon}></div>;
  } else if (props.type === "seeds1") {
    ingredient = <div className={classes.Seeds1}></div>;
  } else if (props.type === "seeds2") {
    ingredient = <div className={classes.Seeds2}></div>;
  } else if (props.type === "salad") {
    ingredient = <div className={classes.Salad}></div>;
  } else ingredient = null;
  return ingredient;
};
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
  //   "bread-bottom": PropTypes.string,
  //   meat: PropTypes.string,
  //   cheese: PropTypes.string,
  //   bacon: PropTypes.string,
  //   seeds1: PropTypes.string,
  //   seeds2: PropTypes.string,
  //   salad: PropTypes.string,
};
export default BurgerIngredient;

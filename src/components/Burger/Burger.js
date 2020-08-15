import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerINgredients";
import classes from "./Burger.module.css";
const Burger = (props) => {
  const stuff = [];
  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      stuff.push(<BurgerIngredient key={key + i} type={key} />);
    }
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"} />
      {stuff}
      <BurgerIngredient type={"bread-bottom"} />
    </div>
  );
};
export default Burger;

import React from "react";
import classes from "./../NavItems/NavItems.module.css";
import NavItem from "./NavItem/NavItem";
const NavItems = (props) => {
  return (
    <div className={classes.NavItems}>
      <NavItem link="/" active>
        Burger
      </NavItem>
      <NavItem link="/">Checkout</NavItem>
    </div>
  );
};
export default NavItems;

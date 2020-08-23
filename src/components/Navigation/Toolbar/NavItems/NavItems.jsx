import React from "react";
import classes from "./../NavItems/NavItems.module.css";
import NavItem from "./NavItem/NavItem";
const NavItems = (props) => {
  return (
    <div className={classes.NavItems}>
      <NavItem link="/" exact>
        Burger
      </NavItem>
      <NavItem link="/orders">Orders</NavItem>
    </div>
  );
};
export default NavItems;

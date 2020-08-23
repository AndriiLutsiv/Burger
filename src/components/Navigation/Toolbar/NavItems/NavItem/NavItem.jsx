import React from "react";
import classes from "../NavItem/NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <div className={classes.NavItem}>
      <NavLink
        exact={props.exact}
        activeClassName={classes.active}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </div>
  );
};
export default NavItem;

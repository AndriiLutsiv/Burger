import React from "react";
import classes from "../NavItem/NavItem.module.css";
const NavItem = (props) => {
  return (
    <div className={classes.NavItem}>
      <a className={props.active && classes.active} href={props.link}>
        {props.children}
      </a>
    </div>
  );
};
export default NavItem;

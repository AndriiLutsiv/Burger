import React from "react";
import classes from "./PhoneMenu.module.css";
const PhoneMenu = (props) => {
  return (
    <div onClick={props.emergedSidebar} className={classes.wrap}>
      <div className={classes.stick}></div>
      <div className={classes.stick}></div>
      <div className={classes.stick}></div>
    </div>
  );
};
export default PhoneMenu;

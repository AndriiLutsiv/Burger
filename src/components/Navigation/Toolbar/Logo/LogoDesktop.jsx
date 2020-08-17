import React from "react";
import logo from "../../../../assets/burger-logo.png";
import classes from "./LogoDesktop.module.css";
const LogoDesktop = (props) => {
  return (
    <div className={classes.LogoDesktop}>
      <img src={logo} alt="#" />
    </div>
  );
};
export default LogoDesktop;

import React from "react";
import classes from "./Toolbar.module.css";
import NavItems from "./NavItems/NavItems";
import LogoDesktop from "./Logo/LogoDesktop";
const Toolbar = (props) => {
  return (
    <div className={classes.Tolbar}>
      <div onClick={props.emergedSidebar}>MENU</div>
      <LogoDesktop />
      <div className={classes.DesktopOnly}>
        <NavItems />
      </div>
    </div>
  );
};
export default Toolbar;

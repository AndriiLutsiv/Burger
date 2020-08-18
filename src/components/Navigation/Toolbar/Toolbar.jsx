import React from "react";
import classes from "./Toolbar.module.css";
import NavItems from "./NavItems/NavItems";
import LogoDesktop from "./Logo/LogoDesktop";
import PhoneMenu from "./SmartPhoneMenu/PhoneMenu";

const Toolbar = (props) => {
  return (
    <div className={classes.Tolbar}>
      <PhoneMenu emergedSidebar={props.emergedSidebar} />
      <div className={classes.DesktopOnly}>MENU</div>
      <LogoDesktop />
      <div className={classes.DesktopOnly}>
        <NavItems />
      </div>
    </div>
  );
};
export default Toolbar;

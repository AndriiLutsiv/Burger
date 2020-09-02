import React from "react";
import Logo from "../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.module.css";
const SideDrawer = (props) => {
  let addClasses = [classes.SideDrawer];
  if (props.showSidebar) {
    addClasses = [classes.SideDrawer, classes.Open];
  } else {
    addClasses = [classes.SideDrawer, classes.Close];
  }

  return (
    <div className={addClasses.join(" ")}>
      <Logo height={"10%"} />
      <div>
        <NavItems />
      </div>
      <button onClick={props.removeSidebar} className={classes.hideSidebar}>
        <strong className={classes.arrow}>&#10229;</strong>
      </button>
    </div>
  );
};
export default SideDrawer;

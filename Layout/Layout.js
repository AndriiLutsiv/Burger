import React from "react";
import HocAux from "../../hoc/HocAux";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <HocAux>
      <div> Toolbar, SideDrawer, Backdrop </div>{" "}
      <main className={classes.Content}> {props.children} </main>{" "}
    </HocAux>
  );
};
export default Layout;

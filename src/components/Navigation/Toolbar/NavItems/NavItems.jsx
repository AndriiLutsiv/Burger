import React from "react";
import classes from "./../NavItems/NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import { connect } from "react-redux";
const NavItems = (props) => {
  return (
    //depending on whether we are logged in we`ll eather display some navigationTabs or hide them
    <div className={classes.NavItems}>
      <div
        style={
          props.idToken === null ? { display: "none" } : { display: "block" }
        }
      >
        <NavItem link="/" exact>
          Burger
        </NavItem>
      </div>
      <div
        style={
          props.idToken === null ? { display: "none" } : { display: "block" }
        }
      >
        <NavItem link="/orders">Orders</NavItem>
      </div>
      <div
        style={
          props.idToken !== null ? { display: "none" } : { display: "block" }
        }
      >
        <NavItem link="/signup">SignUp/LogIn </NavItem>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    idToken: state.authReducer.idToken,
  };
};
export default connect(mapStateToProps, null)(NavItems);

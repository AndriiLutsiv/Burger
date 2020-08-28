import React from "react";
import classes from "./Toolbar.module.css";
import NavItems from "./NavItems/NavItems";
import LogoDesktop from "./Logo/LogoDesktop";
import PhoneMenu from "./SmartPhoneMenu/PhoneMenu";
import { connect } from "react-redux";
import * as authAC from "../../../reduxStore/authPage/authActionCreators";
import { Redirect } from "react-router-dom";

const Toolbar = (props) => {
  const logOut = () => {
    props.logOutAC();
  };
  return (
    <div>
      <div className={classes.Tolbar}>
        <PhoneMenu emergedSidebar={props.emergedSidebar} />
        <div
          onClick={logOut}
          className={classes.LogOut}
          style={
            props.idToken === null ? { display: "none" } : { display: "block" }
          }
        >
          LogOut
        </div>
        <LogoDesktop />
        <div className={classes.DesktopOnly}>
          <NavItems />
        </div>
      </div>
      {props.idToken === null ? <Redirect to={"/signup"} /> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { idToken: state.authReducer.idToken };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOutAC: () => dispatch(authAC.logOutAC()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

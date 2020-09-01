import React from "react";
import classes from "./Toolbar.module.css";
import NavItems from "./NavItems/NavItems";
import LogoDesktop from "./Logo/LogoDesktop";
import PhoneMenu from "./SmartPhoneMenu/PhoneMenu";
import { connect } from "react-redux";
import * as authAC from "../../../reduxStore/authPage/authActionCreators";

import { PureComponent } from "react";

class Toolbar extends PureComponent {
  render() {
    return (
      <div>
        <div className={classes.Tolbar}>
          <PhoneMenu emergedSidebar={this.props.emergedSidebar} />
          <LogoDesktop />
          <div className={classes.DesktopOnly}>
            <NavItems />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { idToken: state.authReducer.idToken };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOutAC: () => dispatch(authAC.logOutAC()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

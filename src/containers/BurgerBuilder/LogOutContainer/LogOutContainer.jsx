import React from "react";

import { connect } from "react-redux";
import * as authAC from "../../../reduxStore/authPage/authActionCreators";
import { Redirect } from "react-router-dom";
class LogOutContainer extends React.Component {
  componentDidMount() {
    localStorage.clear();
    console.log("cleared");
    this.props.logOutAC();
  }
  render() {
    return <Redirect to={"/signup"} />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return { logOutAC: () => dispatch(authAC.logOutAC) };
};
export default connect(null, mapDispatchToProps)(LogOutContainer);

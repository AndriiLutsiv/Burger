import React from "react";

import Loader from "../../../components/common/Loader";
import { connect } from "react-redux";
import * as authAC from "../../../reduxStore/authPage/authActionCreators";
import LogInReduxForm from "./LogIn";
import { Redirect } from "react-router-dom";
class LogInContainer extends React.Component {
  backToSignUp = () => {
    this.props.history.goBack();
  };

  render() {
    const logIn = (value) => {
      const loginFormData = {
        mail: value.mail,
        pass: value.pass,
      };
      this.props.logInThunkCreator(loginFormData); //initiates request with user logIn data from redux form
    };
    return (
      <div>
        <div>
          {this.props.loading ? (
            <Loader />
          ) : (
            <LogInReduxForm
              onSubmit={logIn}
              errorResponseStatus={this.props.errorResponseStatus}
              errorMessage={this.props.errorMessage}
              backToSignUp={this.backToSignUp}
            />
          )}
        </div>
        {this.props.idToken !== null ? <Redirect to={"/"} /> : null}
        {/* if we are logged in there will be automatic redirection to burger page */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorResponseStatus: state.authReducer.errorResponseStatus,
    errorMessage: state.authReducer.errorMessage,
    idToken: state.authReducer.idToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logInThunkCreator: (value) => dispatch(authAC.logInThunkCreator(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);

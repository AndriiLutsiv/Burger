import React from "react";
import SignUpReduxForm from "./SignUp";
import Loader from "../../../components/common/Loader";
import { connect } from "react-redux";
import * as authAC from "../../../reduxStore/authPage/authActionCreators";
class SignUpContainer extends React.Component {
  componentDidMount() {
    //after clisking on logOut we are redirected  here, but despite L.storage is empty, the state still contains token if we don`t update browser page. That`s why we have to recheck
    this.props.logOutAC();
  }
  bringToLogin = () => {
    this.props.history.push("/login");
  };
  render() {
    const signUp = (value) => {
      const signUpFormData = {
        mail: value.mail,
        pass: value.pass,
      };
      this.props.signUpThunkCreator(signUpFormData); //initiates request with user signUp data from redux form
      this.bringToLogin();
    };
    return (
      <div>
        <div>
          {this.props.loading ? (
            <Loader />
          ) : (
            <SignUpReduxForm
              onSubmit={signUp}
              errorResponseStatus={this.props.errorResponseStatus}
              errorMessage={this.props.errorMessage}
              bringToLogin={this.bringToLogin}
            />
          )}
        </div>
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
    signUpThunkCreator: (value) => dispatch(authAC.signUpThunkCreator(value)),
    checkTokenThunkCreator: () => dispatch(authAC.checkTokenThunkCreator()),
    logOutAC: () => dispatch(authAC.logOutAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);

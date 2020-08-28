import React from "react";

import Loader from "../../../components/common/Loader";
import { connect } from "react-redux";
import * as authAC from "../../../reduxStore/authPage/authActionCreators";
import LogInReduxForm from "./LogIn";
import { Redirect } from "react-router-dom";
class LogInContainer extends React.Component {
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
              backToSignUp={this.props.backToSignUp}
            />
          )}
        </div>
        {this.props.idToken !== null ? <Redirect to={"/"} /> : null}{" "}
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
    backToSignUp: () => dispatch(authAC.backToSignUpPageAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);

// class SignUpContainer extends React.Component {
//   state = {
//     isSignUp: false,
//     loading: false,
//     idToken: "",
//     localId: "",
//     errorResponse: false,
//     errorMessage: "",
//   };
//   switchSignUp = () => {
//     const isSignUpState = this.state.isSignUp;
//     this.setState({ isSignUp: !isSignUpState });
//   };
//   render() {
//     const submit = (value) => {
//       const submitData = {
//         email: value.mail,
//         password: value.pass,
//         returnSecureToken: true,
//       };
//       this.setState({ loading: true });
//       let signUrl =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic"; //this is signUp URL (firebase auth signUP API + our API key from settings)
//       if (!this.state.isSignUp) {
//         signUrl =
//           "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic"; //this is signIn URL (firebase auth signIn API + our API key from settings)
//       }
//       Axios.post(signUrl, submitData)
//         .then((Response) => {
//           this.setState({ loading: false });
//           this.setState({
//             idToken: Response.data.idToken,
//             localId: Response.data.localId,
//             errorResponse: false,
//           });
//           console.log(Response);
//           console.log("here goes state: ", this.state);
//         })
//         .catch((error) => {
//           this.setState({ loading: false });
//           this.setState({
//             errorResponse: true,
//             errorMessage: error.response.data.error.message,
//           });
//           console.log("catching:", error.response.data.error.message);
//           console.log(this.state);
//         });
//     };
//     return (
//       <div>
//         {this.state.loading ? (
//           <Loader />
//         ) : (
//           <SignUpReduxForm
//             isSignUp={this.state.isSignUp}
//             switchSignUp={this.switchSignUp}
//             onSubmit={submit}
//             errorResponse={this.state.errorResponse}
//             errorMessage={this.state.errorMessage}
//           />
//         )}
//       </div>
//     );
//   }
// }
// export default SignUpContainer;

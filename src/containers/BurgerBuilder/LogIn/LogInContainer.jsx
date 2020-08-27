import React from "react";
import LoginReduxForm from "./LogIn";
import Axios from "axios";
class LoginContainer extends React.Component {
  state = {
    isSignUp: false,
  };
  switchSignUp = () => {
    const isSignUpState = this.state.isSignUp;
    this.setState({ isSignUp: !isSignUpState });
  };
  render() {
    const submit = (value) => {
      const submitData = {
        email: value.mail,
        password: value.pass,
        returnSecureToken: true,
      };
      let signUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic"; //this is signUp URL (firebase auth signUP API + our API key from settings)
      if (!this.state.isSignUp) {
        signUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic"; //this is signIn URL (firebase auth signIn API + our API key from settings)
      }
      Axios.post(signUrl, submitData).then((Response) => {
        console.log(Response);
      });
    };
    return (
      <div>
        <LoginReduxForm
          isSignUp={this.state.isSignUp}
          switchSignUp={this.switchSignUp}
          onSubmit={submit}
        />
      </div>
    );
  }
}
export default LoginContainer;

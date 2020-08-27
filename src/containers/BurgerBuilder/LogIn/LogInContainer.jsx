import React from "react";
import LoginReduxForm from "./LogIn";
import Axios from "axios";
import Loader from "../../../components/common/Loader";
class LoginContainer extends React.Component {
  state = {
    isSignUp: false,
    loading: false,
    idToken: "",
    localId: "",
    errorResponse: false,
    errorMessage: "",
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
      this.setState({ loading: true });
      let signUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic"; //this is signUp URL (firebase auth signUP API + our API key from settings)
      if (!this.state.isSignUp) {
        signUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic"; //this is signIn URL (firebase auth signIn API + our API key from settings)
      }
      Axios.post(signUrl, submitData)
        .then((Response) => {
          this.setState({ loading: false });
          this.setState({
            idToken: Response.data.idToken,
            localId: Response.data.localId,
            errorResponse: false,
          });
          console.log(Response);
          console.log("here goes state: ", this.state);
        })
        .catch((error) => {
          this.setState({ loading: false });
          this.setState({
            errorResponse: true,
            errorMessage: error.response.data.error.message,
          });
          console.log("catching:", error.response.data.error.message);
          console.log(this.state);
        });
    };
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <LoginReduxForm
            isSignUp={this.state.isSignUp}
            switchSignUp={this.switchSignUp}
            onSubmit={submit}
            errorResponse={this.state.errorResponse}
            errorMessage={this.state.errorMessage}
          />
        )}
      </div>
    );
  }
}
export default LoginContainer;

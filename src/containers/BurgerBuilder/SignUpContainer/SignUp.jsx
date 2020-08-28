import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../../../components/common/input";
import {
  requiredField,
  maxLengthCreator,
  minLengthCreator,
} from "../../../components/common/validators";
import classes from "./SignUp.module.css";
import { NavLink } from "react-router-dom";
const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(3);

const SignUp = (props) => {
  return (
    <fieldset className={classes.SignUp}>
      <legend>Sign Up form</legend>
      {props.errorResponseStatus ? (
        <p style={{ color: "red" }}>{props.errorMessage}</p>
      ) : null}
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Input}
            name={"mail"}
            type={"text"}
            label={"Email"}
            validate={[requiredField, maxLength, minLength]}
          />
        </div>
        <div>
          <Field
            component={Input}
            name={"pass"}
            type={"password"}
            label={"Password"}
            validate={[requiredField]}
          />
        </div>
        <button>SignUp</button>
        <div>
          If you already have an account, please follow
          <strong>
            <NavLink to={"/login"}> this link</NavLink>
          </strong>{" "}
          to log in
        </div>
      </form>
    </fieldset>
  );
};
const SignUpReduxForm = reduxForm({
  form: "signup",
})(SignUp);
export default SignUpReduxForm;

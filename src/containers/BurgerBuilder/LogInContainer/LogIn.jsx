import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../../../components/common/input";
import {
  requiredField,
  maxLengthCreator,
  minLengthCreator,
} from "../../../components/common/validators";
import classes from "./LogIn.module.css";
import { NavLink } from "react-router-dom";
const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(3);

const LogIn = (props) => {
  return (
    <fieldset className={classes.LogIn}>
      <legend>LogIn form</legend>
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
        <button>Log in</button>

        <p>
          {/* <NavLink onClick={props.backToSignUp} to={"/signup"}> */}
          {/*  onclick you are redirected to sign up page */}
          <span className={classes.toSignUp} onClick={props.backToSignUp}>
            &#8592; back to sign up page
          </span>
          {/* </NavLink> */}
        </p>
      </form>
    </fieldset>
  );
};
const LogInReduxForm = reduxForm({
  form: "login",
})(LogIn);
export default LogInReduxForm;

import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../../../components/common/input";
import {
  requiredField,
  maxLengthCreator,
  minLengthCreator,
} from "../../../components/common/validators";
import classes from "./LogIn.module.css";
const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(3);

const LogIn = (props) => {
  return (
    <div className={classes.LogIn}>
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
        <button>LogIn</button>
      </form>
      <button onClick={props.switchSignUp}>
        switch to sign{props.isSignUp ? "IN" : "UP"}
      </button>
    </div>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LogIn);
export default LoginReduxForm;

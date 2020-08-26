import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./ReduxFormContactData.module.css";
import {
  requiredField,
  maxLengthCreator,
  minLengthCreator,
} from "../../../../../components/common/validators";
import Input from "../../../../../components/common/input";
const maxLength = maxLengthCreator(20);
const minLength = minLengthCreator(3);
const FormcontactData = (props) => {
  return (
    <div className={classes.formMain}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            validate={[requiredField, maxLength, minLength]}
            label={"Enter your name"}
            name={"name"}
            component={Input}
          />
        </div>
        <div>
          <Field
            validate={[requiredField, maxLength, minLength]}
            label={"Enter your email"}
            name={"email"}
            component={Input}
          />
        </div>
        <div>
          <Field
            validate={[requiredField, maxLength, minLength]}
            label={"Specify your country"}
            name={"country"}
            component={Input}
          />
        </div>
        <div>
          <Field
            validate={[requiredField, maxLength, minLength]}
            label={"Specify your city"}
            name={"city"}
            component={Input}
          />
        </div>
        <button>ORDER</button>
      </form>
    </div>
  );
};
const ReduxFormContactData = reduxForm({
  form: "contactData",
})(FormcontactData);
export default ReduxFormContactData;

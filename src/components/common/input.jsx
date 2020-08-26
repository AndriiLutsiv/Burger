import React from "react";
import classes from "./input.module.css";
const Input = ({ input, label, type, meta: { touched, error, warning } }) => {
  const showError = error && touched;
  return (
    <div>
      <input
        className={showError ? classes.error : classes.normal}
        {...input}
        placeholder={label}
        type={type}
      />
      <br />
      {showError &&
        (<span className={classes.redSpan}>{error}</span> ||
          (warning && <span className={classes.redSpan}>{warning}</span>))}
    </div>
  );
};
export default Input;

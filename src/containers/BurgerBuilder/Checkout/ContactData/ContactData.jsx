import React from "react";
import classes from "./ContactData.module.css";
class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    adress: {
      country: "",
      city: "",
    },
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h3>Enter your Contact Data</h3>
        <form action="">
          <input className={classes.Input} type="text" name="name" />
          <input className={classes.Input} type="text" name="email" />
          <input className={classes.Input} type="text" name="country" />
          <input className={classes.Input} type="text" name="city" />
          <button>ORDER</button>
        </form>
      </div>
    );
  }
}

export default ContactData;

import React from "react";

import classes from "./ContactData.module.css";
// import instance from "../../../../axiosOrders";
import Loader from "../../../../components/common/Loader";
import Axios from "axios";
import { withRouter } from "react-router-dom";
class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    adress: {
      country: "",
      city: "",
    },
    loading: false,
  };
  setLoading = (boolean) => {
    //activates loading depending on incoming parameter
    this.setState({ loading: boolean });
  };
  order = () => {
    alert("order");
    this.setLoading(true);
    let order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: {
        //some random data
        name: "Andrii",
        email: "example@gmail.com",
        adress: {
          country: "Ukraine",
          city: "Poltava",
        },
      },
    };

    //here goes axios post requst

    Axios.put("https://burgerbase-43af3.firebaseio.com/orders.json", order)
      .then((Response) => {
        this.setLoading(false); //once the responce is recieved we turn off loading
        console.log(Response);
        this.props.history.push("/");
      })
      .catch((error) => {
        // console.log(error);
        this.setLoading(false);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div className={classes.ContactData}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div action="">
            <input className={classes.Input} type="text" name="name" />
            <input className={classes.Input} type="text" name="email" />
            <input className={classes.Input} type="text" name="country" />
            <input className={classes.Input} type="text" name="city" />
            <button onClick={this.order}>ORDER</button>
          </div>
        )}
        <h3>Enter your Contact Data</h3>
      </div>
    );
  }
}

export default withRouter(ContactData);

import React from "react";
import * as actionCreators from "../../../../reduxStore/burgerPage/burger-actionCreators";
import classes from "./ContactData.module.css";
// import instance from "../../../../axiosOrders";
import Loader from "../../../../components/common/Loader";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    adress: {
      country: "",
      city: "",
    },
  };
  order = () => {
    alert("order");
    this.props.loadingProcess(true);
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

    Axios.put(
      "https://burgerbase-43af3.firebaseio.com/orders.json",
      order
    ).then((Response) => {
      this.props.loadingProcess(false); //once the responce is recieved we turn off loading
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <div className={classes.ContactData}>
        {this.props.loading ? (
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
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadingProcess: (boolean) => {
      dispatch(actionCreators.loadingProcessAC(boolean));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));

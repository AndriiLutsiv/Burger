import React from "react";
import * as actionCreators from "../../../../reduxStore/burgerPage/burger-actionCreators";
import classes from "./ContactData.module.css";
// import instance from "../../../../axiosOrders";
import Loader from "../../../../components/common/Loader";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReduxFormContactData from "./ReduxFormContactData/ReduxFormContactData";
class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    adress: {
      country: "",
      city: "",
    },
  };
  order = (values) => {
    let order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: {
        //some random data
        name: values.name,
        email: values.email,
        adress: {
          country: values.country,
          city: values.city,
        },
      },
    };

    //here goes axios post requst
    this.props.loadingProcess(true);
    Axios.put(
      "https://burgerbase-43af3.firebaseio.com/orders.json",
      order
    ).then((Response) => {
      this.props.loadingProcess(false); //once the responce is recieved we turn off loading

      this.props.history.push("/");
      this.props.hideOrderSummary(); // when we are redirected to '/' the yellow orderSummary will be hidden
    });
  };
  render() {
    return (
      <div className={classes.ContactData}>
        {this.props.loading ? (
          <Loader />
        ) : (
          <ReduxFormContactData onSubmit={this.order} />
        )}
        <h3>Enter your Contact Data</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.burgerReducer.loading,
    ingredients: state.burgerReducer.ingredients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadingProcess: (boolean) => {
      dispatch(actionCreators.loadingProcessAC(boolean));
    },
    hideOrderSummary: () => {
      dispatch(actionCreators.cancelOrderAC());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));

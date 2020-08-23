import React, { Component } from "react";
import HocAux from "../../hoc/HocAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";

import Loader from "../../components/common/Loader";
import Axios from "axios";

const prices = {
  salad: 1.2,
  cheese: 2.1,
  bacon: 2.15,
  meat: 3.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: true,
    orderActive: false,
    loading: false,
  };
  activareOrder = () => {
    this.setState({ orderActive: true }); //if orderActive is true the yellow order summary will appear
  };
  cancelOrder = () => {
    this.setState({ orderActive: false }); //if orderActive is true the yellow order summary will appear
  };

  // by clicking it will send request to server with our ingredients and price and additional info and bring us to /checkout URL
  continueOrder = () => {
    let arrayWithParams = [];
    arrayWithParams.push("totalPrice=" + this.state.totalPrice);
    for (let key in this.state.ingredients) {
      arrayWithParams.push(
        encodeURIComponent(key) +
          "=" +
          encodeURIComponent(this.state.ingredients[key])
      );
    }
    const queryString = arrayWithParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  componentDidMount = () => {
    Axios.get("https://burgerbase-43af3.firebaseio.com/Ingredients.json").then(
      (Response) => {
        this.setState({ ingredients: Response.data });
      }
    );
  };
  makingPurchasable = (updatedIngredients) => {
    // this allows make order button to be clickable
    // we expect updated ingredients Object
    let arrayWithValues = [];
    for (let key in updatedIngredients) {
      arrayWithValues.push(updatedIngredients[key]);
    }
    let count = 0;
    arrayWithValues.forEach((element) => {
      count += element;
    });
    this.setState({ purchasable: count <= 0 ? true : false });
  };
  addIngredient = (type) => {
    //working on quantity
    const updatedQuantity = this.state.ingredients[type] + 1; //certain ingredient`s quantity will be increased
    const updatedIngredients = {
      ...this.state.ingredients,
    }; //we work with the cope of ingredients
    updatedIngredients[type] = updatedQuantity; // certain ingr`s quantity in object now equals to updated Quantity
    //working on totalPrice
    const updatedTotalPrice = this.state.totalPrice + prices[type]; //the totalPrice for engredients is now the current one + certain ingr. price from price obj
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
    this.makingPurchasable(updatedIngredients); //we call after every click of adding ingredient
  };

  removeIngredient = (type) => {
    //working on quantity
    const updatedQuantity = this.state.ingredients[type] - 1; //certain ingredient`s quantity will be decreased
    const updatedIngredients = {
      ...this.state.ingredients,
    }; //we work with the cope of ingredients
    updatedIngredients[type] = updatedQuantity; // certain ingr`s quantity in object now equals to updated Quantity
    //working on totalPrice
    const updatedTotalPrice = this.state.totalPrice - prices[type]; //the totalPrice for engredients is now the current one - certain ingr. price from price obj

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
    this.makingPurchasable(updatedIngredients); //we call after every click of removing ingredient
  };

  render() {
    return (
      <HocAux>
        {this.state.ingredients === null ? (
          <Loader />
        ) : (
          <div>
            <Burger ingredients={this.state.ingredients} />

            {this.state.loading ? (
              <Loader />
            ) : (
              <Modal
                orderActive={this.state.orderActive}
                cancelOrder={this.cancelOrder}
                ingredients={this.state.ingredients}
                continueOrder={this.continueOrder}
                totalPrice={this.state.totalPrice}
              />
            )}

            <BuildControls
              addIngredient={this.addIngredient}
              removeIngredient={this.removeIngredient}
              buttonStatus={this.state.buttonStatus}
              ingredientsIfZero={this.state.ingredients} //passing the ingredients for ternar
              ingredientsIfThree={this.state.ingredients} // passing the ingredients for ternar
              totalPrice={this.state.totalPrice}
              purchasable={this.state.purchasable}
              activareOrder={this.activareOrder}
            />
          </div>
        )}
      </HocAux>
    );
  }
}
export default BurgerBuilder;

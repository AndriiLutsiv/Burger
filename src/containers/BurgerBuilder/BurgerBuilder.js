import React, { Component } from "react";
import HocAux from "../../hoc/HocAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const prices = {
  salad: 1.2,
  cheese: 2.1,
  bacon: 2.15,
  meat: 3.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
  };
  addIngredient = (type) => {
    //working on quantity
    const updatedQuantity = this.state.ingredients[type] + 1; //certain ingredient`s quantity will be increased
    const updatedIngredients = { ...this.state.ingredients }; //we work with the cope of ingredients
    updatedIngredients[type] = updatedQuantity; // certain ingr`s quantity in object now equals to updated Quantity
    //working on totalPrice
    const updatedTotalPrice = this.state.totalPrice + prices[type]; //the totalPrice for engredients is now the current one + certain ingr. price from price obj
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
  };

  removeIngredient = (type) => {
    //working on quantity
    const updatedQuantity = this.state.ingredients[type] - 1; //certain ingredient`s quantity will be decreased
    const updatedIngredients = { ...this.state.ingredients }; //we work with the cope of ingredients
    updatedIngredients[type] = updatedQuantity; // certain ingr`s quantity in object now equals to updated Quantity
    //working on totalPrice
    const updatedTotalPrice = this.state.totalPrice - prices[type]; //the totalPrice for engredients is now the current one - certain ingr. price from price obj

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
  };

  render() {
    return (
      <HocAux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          buttonStatus={this.state.buttonStatus}
          ingredientsIfZero={this.state.ingredients} //passing the ingredients for ternar
          ingredientsIfThree={this.state.ingredients} // passing the ingredients for ternar
          totalPrice={this.state.totalPrice}
        />
      </HocAux>
    );
  }
}
export default BurgerBuilder;

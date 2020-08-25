import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import Loader from "../../components/common/Loader";
import { connect } from "react-redux";
import * as actionCreators from "../../reduxStore/burgerPage/burger-actionCreators";

class BurgerBuilder extends Component {
  componentDidMount() {
    this.props.setIngredientsThunkCreator();
  }
  // by clicking it will send request to server with our ingredients and price and additional info and bring us to /checkout URL
  continueOrder = () => {
    this.props.history.push("/checkout");
  };

  makingPurchasable = (updatedIngredients) => {
    // this allows make order button to be clickable. we expect updated ingredients Object
    let arrayWithValues = [];
    for (let key in updatedIngredients) {
      arrayWithValues.push(updatedIngredients[key]);
    }
    let count = 0;
    arrayWithValues.forEach((element) => {
      count += element;
    });
    return count <= 0 ? true : false;
  };
  addIngredient = (ingredientType) => {
    //adds ingredient
    this.props.onAddIngredient(ingredientType);
    this.props.onAddPrice(ingredientType);
  };

  removeIngredient = (ingredientType) => {
    //removes ingredient
    this.props.onRemoveIngredients(ingredientType);
    this.props.onSubtractPrice(ingredientType);
  };

  render() {
    return (
      <>
        {this.props.loading ? (
          <Loader />
        ) : (
          <div>
            <Burger ingredients={this.props.ingredients} />
            {this.props.loading ? (
              <Loader />
            ) : (
              <Modal
                ingredients={this.props.ingredients}
                continueOrder={this.continueOrder}
                totalPrice={this.props.totalPrice}
              />
            )}

            <BuildControls
              addIngredient={this.addIngredient}
              removeIngredient={this.removeIngredient}
              ingredientsIfZero={this.props.ingredients} //passing the ingredients for ternar
              ingredientsIfThree={this.props.ingredients} // passing the ingredients for ternar
              totalPrice={this.props.totalPrice}
              purchasable={this.makingPurchasable(this.props.ingredients)}
            />
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredient: (ingredientType) =>
      dispatch(actionCreators.addIngredientAC(ingredientType)),
    onRemoveIngredients: (ingredientType) =>
      dispatch(actionCreators.removeIngredientAC(ingredientType)),
    onAddPrice: (ingredientType) =>
      dispatch(actionCreators.addPriceAC(ingredientType)),
    onSubtractPrice: (ingredientType) =>
      dispatch(actionCreators.subtractPriceAC(ingredientType)),
    setIngredientsThunkCreator: () =>
      dispatch(actionCreators.setIngredientsThunkCreator()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);

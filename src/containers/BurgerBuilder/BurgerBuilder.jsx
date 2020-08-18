import React, { Component } from "react";
import HocAux from "../../hoc/HocAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import instance from "../../axiosOrders";
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
  setLoading = (boolean) => {
    //activates loading depending on incoming parameter
    this.setState({ loading: boolean });
  };
  continueOrder = () => {
    this.setLoading(true);
    alert("continue");
    let order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        //some random data
        name: "Andrii",
        weight: "88",
        adress: {
          country: "Ukraine",
          city: "Poltava",
        },
      },
    };
    instance //here goes axios post requst
      .post("/orders.json", order)
      .then((Response) => {
        this.setLoading(false); //once the responce is recieved we turn off loading
        console.log(Response);
      })
      .catch((error) => {
        this.setLoading(false);
        console.log(error);
      });
  };
  componentDidMount = () => {
    Axios.get("https://burgerbase-43af3.firebaseio.com/Ingredients.json").then(
      (Response) => {
        console.log(Response.data);

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

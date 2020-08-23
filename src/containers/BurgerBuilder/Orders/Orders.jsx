import React from "react";
import Order from "./Order/Order";
import instance from "../../../axiosOrders";
class Orders extends React.Component {
  state = {
    ingredients: [],
    quantity: [],
    price: "",
  };
  componentDidMount() {
    instance.get("orders.json").then((Response) => {
      console.log(Response.data);
      let retrievedIngredients = [];
      let retrievedQuantity = [];

      for (let key in Response.data.ingredients) {
        retrievedIngredients.push(key);
        retrievedQuantity.push(Response.data.ingredients[key]);
      }
      this.setState({
        ingredients: retrievedIngredients,
        quantity: retrievedQuantity,
        price: Response.data.totalPrice,
      });

      console.log("state is:", this.state);
    });
  }
  render() {
    return (
      <div>
        <Order
          ingredients={this.state.ingredients}
          quantity={this.state.quantity}
          price={this.state.price}
        />
      </div>
    );
  }
}
export default Orders;

import React, { Component } from "react";
import HocAux from "../../hoc/HocAux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: { salad: 1, cheese: 2, bacon: 3, meat: 1 },
  };
  render() {
    return (
      <HocAux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </HocAux>
    );
  }
}
export default BurgerBuilder;

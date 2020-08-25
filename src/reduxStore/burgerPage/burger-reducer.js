import * as actionTypes from './burger-actionTypes';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';

const prices = {
    salad: 1.2,
    cheese: 2.1,
    bacon: 2.15,
    meat: 3.5,
};
const initialState = {
    ingredients: {},
    loading: false,
    totalPrice: 0,
    orderActive: false, //if orderActive is true the yellow order summary will appear
}
const burgerReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
                }
            };
        case actionTypes.RAMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] - 1
                }
            };
        case actionTypes.UPDATE_PRICE_ADD:
            return {
                ...state,
                totalPrice: state.totalPrice + prices[action.ingredientType],
            };
        case actionTypes.UPDATE_PRICE_SUBTRACT:
            return {
                ...state,
                totalPrice: state.totalPrice - prices[action.ingredientType],
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            };
        case actionTypes.LOAD_PROCESS:
            return {
                ...state,
                loading: action.boolean
            };
        case actionTypes.ACTIVATE_ORDER:
            return {
                ...state,
                orderActive: true,
            };
        case actionTypes.CANCEL_ORDER:
            return {
                ...state,
                orderActive: false,
            };

        default:
            return state;
    }
};

let store = createStore(burgerReducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
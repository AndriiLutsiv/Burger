import * as actionTypes from './burger-actionTypes';

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
                ingredients: action.ingredients,
                    totalPrice: 0 //after order we are redirected to '/', but if we don`t hardcode totalPrice to be 0, price will remain after last order. (now price will be updated as there is didMount in '/')
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

export default burgerReducer;
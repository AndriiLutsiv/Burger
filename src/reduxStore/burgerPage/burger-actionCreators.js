import * as actionTypes from './burger-actionTypes';
import instance from '../../axiosOrders';
export const addIngredientAC = (ingredientType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientType: ingredientType,
    }
}
export const removeIngredientAC = (ingredientType) => {
    return {
        type: actionTypes.RAMOVE_INGREDIENT,
        ingredientType: ingredientType,
    }
}
export const addPriceAC = (ingredientType) => {
    return {
        type: actionTypes.UPDATE_PRICE_ADD,
        ingredientType: ingredientType,
    }
}
export const subtractPriceAC = (ingredientType) => {
    return {
        type: actionTypes.UPDATE_PRICE_SUBTRACT,
        ingredientType: ingredientType,
    }
}

export const loadingProcessAC = (boolean) => {
    return {
        type: actionTypes.LOAD_PROCESS,
        boolean: boolean
    }
}

export const activateOrderAC = () => {

    return {
        type: actionTypes.ACTIVATE_ORDER
    }
}
export const cancelOrderAC = () => {
    return {
        type: actionTypes.CANCEL_ORDER
    }
}

export const setIngredientsAC = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

//      thunks
export const setIngredientsThunkCreator = () => {
    return (dispatch) => {
        dispatch(loadingProcessAC(true));
        instance.get('https://burgerbase-43af3.firebaseio.com/Ingredients.json')
            .then(Response => {
                dispatch(loadingProcessAC(false));
                dispatch(setIngredientsAC(Response.data));
            })
    }
}
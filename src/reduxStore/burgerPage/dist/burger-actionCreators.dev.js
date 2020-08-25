"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIngredientsThunkCreator = exports.setIngredientsAC = exports.cancelOrderAC = exports.activateOrderAC = exports.loadingProcessAC = exports.subtractPriceAC = exports.addPriceAC = exports.removeIngredientAC = exports.addIngredientAC = void 0;

var actionTypes = _interopRequireWildcard(require("./burger-actionTypes"));

var _axiosOrders = _interopRequireDefault(require("../../axiosOrders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var addIngredientAC = function addIngredientAC(ingredientType) {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientType: ingredientType
  };
};

exports.addIngredientAC = addIngredientAC;

var removeIngredientAC = function removeIngredientAC(ingredientType) {
  return {
    type: actionTypes.RAMOVE_INGREDIENT,
    ingredientType: ingredientType
  };
};

exports.removeIngredientAC = removeIngredientAC;

var addPriceAC = function addPriceAC(ingredientType) {
  return {
    type: actionTypes.UPDATE_PRICE_ADD,
    ingredientType: ingredientType
  };
};

exports.addPriceAC = addPriceAC;

var subtractPriceAC = function subtractPriceAC(ingredientType) {
  return {
    type: actionTypes.UPDATE_PRICE_SUBTRACT,
    ingredientType: ingredientType
  };
};

exports.subtractPriceAC = subtractPriceAC;

var loadingProcessAC = function loadingProcessAC(_boolean) {
  return {
    type: actionTypes.LOAD_PROCESS,
    "boolean": _boolean
  };
};

exports.loadingProcessAC = loadingProcessAC;

var activateOrderAC = function activateOrderAC() {
  return {
    type: actionTypes.ACTIVATE_ORDER
  };
};

exports.activateOrderAC = activateOrderAC;

var cancelOrderAC = function cancelOrderAC() {
  return {
    type: actionTypes.CANCEL_ORDER
  };
};

exports.cancelOrderAC = cancelOrderAC;

var setIngredientsAC = function setIngredientsAC(ingredients) {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
}; //      thunks


exports.setIngredientsAC = setIngredientsAC;

var setIngredientsThunkCreator = function setIngredientsThunkCreator() {
  return function (dispatch) {
    dispatch(loadingProcessAC(true));

    _axiosOrders["default"].get('https://burgerbase-43af3.firebaseio.com/Ingredients.json').then(function (Response) {
      dispatch(loadingProcessAC(false));
      dispatch(setIngredientsAC(Response.data));
    });
  };
};

exports.setIngredientsThunkCreator = setIngredientsThunkCreator;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var actionTypes = _interopRequireWildcard(require("./burger-actionTypes"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prices = {
  salad: 1.2,
  cheese: 2.1,
  bacon: 2.15,
  meat: 3.5
};
var initialState = {
  ingredients: {},
  loading: false,
  totalPrice: 0,
  orderActive: false //if orderActive is true the yellow order summary will appear

};

var burgerReducer = function burgerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return _objectSpread({}, state, {
        ingredients: _objectSpread({}, state.ingredients, _defineProperty({}, action.ingredientType, state.ingredients[action.ingredientType] + 1))
      });

    case actionTypes.RAMOVE_INGREDIENT:
      return _objectSpread({}, state, {
        ingredients: _objectSpread({}, state.ingredients, _defineProperty({}, action.ingredientType, state.ingredients[action.ingredientType] - 1))
      });

    case actionTypes.UPDATE_PRICE_ADD:
      return _objectSpread({}, state, {
        totalPrice: state.totalPrice + prices[action.ingredientType]
      });

    case actionTypes.UPDATE_PRICE_SUBTRACT:
      return _objectSpread({}, state, {
        totalPrice: state.totalPrice - prices[action.ingredientType]
      });

    case actionTypes.SET_INGREDIENTS:
      return _objectSpread({}, state, {
        ingredients: action.ingredients
      });

    case actionTypes.LOAD_PROCESS:
      return _objectSpread({}, state, {
        loading: action["boolean"]
      });

    case actionTypes.ACTIVATE_ORDER:
      return _objectSpread({}, state, {
        orderActive: true
      });

    case actionTypes.CANCEL_ORDER:
      return _objectSpread({}, state, {
        orderActive: false
      });

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(burgerReducer, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
window.store = store;
var _default = store;
exports["default"] = _default;
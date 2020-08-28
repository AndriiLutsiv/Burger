"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var authActionTypes = _interopRequireWildcard(require("./auth-actionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  loading: false,
  idToken: null,
  localId: null,
  errorResponseStatus: false,
  errorMessage: "",
  redirectToLogInLink: null
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case authActionTypes.LOADING_PROCESS:
      // just loading, that we can display while some async operations are initiated
      return _objectSpread({}, state, {
        loading: action["boolean"]
      });

    case authActionTypes.RECIEVE_ID_AND_TOKEN:
      //in response from server we recieve an object with necessary idToken and localId
      return _objectSpread({}, state, {
        idToken: action.dataObj.idToken,
        localId: action.dataObj.localId
      });

    case authActionTypes.ERROR_RESPONSE_STATUS:
      //is used to enable or disable error messages on signUp/LogIn pages
      return _objectSpread({}, state, {
        errorResponseStatus: action["boolean"]
      });

    case authActionTypes.ERROR_MESSAGE:
      //this puts error messaage from firebase to our state, so we can show it to user on signUp/LogIn pages
      return _objectSpread({}, state, {
        errorMessage: action.errorMessage
      });

    case authActionTypes.REDIRECT_TO_LOGIN:
      //this will initiate AC which puts some link in out state (redirectToLogInLink)
      return _objectSpread({}, state, {
        redirectToLogInLink: action.link
      });

    case authActionTypes.BACK_TO_SIGNUP:
      //if this link in login is pressed, it`ll bring you back to login page
      return _objectSpread({}, state, {
        redirectToLogInLink: null
      });

    case authActionTypes.LOG_OUT:
      //if logOut we head back to logIn page
      return {
        idToken: null,
        localId: null
      };

    default:
      return state;
  }
};

var _default = authReducer;
exports["default"] = _default;
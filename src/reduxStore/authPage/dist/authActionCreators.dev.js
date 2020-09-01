"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkTokenThunkCreator = exports.logInThunkCreator = exports.signUpThunkCreator = exports.logOutAC = exports.errorMessageAC = exports.errorResponseStatusAC = exports.recieveIdandTokenAC = exports.loadingProcessAC = void 0;

var authActionTypes = _interopRequireWildcard(require("./auth-actionTypes"));

var _axios = _interopRequireDefault(require("axios"));

require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var loadingProcessAC = function loadingProcessAC(_boolean) {
  return {
    type: authActionTypes.LOADING_PROCESS,
    "boolean": _boolean
  };
};

exports.loadingProcessAC = loadingProcessAC;

var recieveIdandTokenAC = function recieveIdandTokenAC(dataObj) {
  return {
    type: authActionTypes.RECIEVE_ID_AND_TOKEN,
    dataObj: dataObj
  };
};

exports.recieveIdandTokenAC = recieveIdandTokenAC;

var errorResponseStatusAC = function errorResponseStatusAC(_boolean2) {
  return {
    type: authActionTypes.ERROR_RESPONSE_STATUS,
    "boolean": _boolean2
  };
};

exports.errorResponseStatusAC = errorResponseStatusAC;

var errorMessageAC = function errorMessageAC(errorMessage) {
  return {
    type: authActionTypes.ERROR_MESSAGE,
    errorMessage: errorMessage
  };
};

exports.errorMessageAC = errorMessageAC;

var logOutAC = function logOutAC() {
  return {
    type: authActionTypes.LOG_OUT
  };
}; //signUp thunk


exports.logOutAC = logOutAC;

var signUpThunkCreator = function signUpThunkCreator(value) {
  return function (dispatch) {
    dispatch(loadingProcessAC(true));

    _axios["default"].post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic", {
      email: value.mail,
      password: value.pass,
      returnSecureToken: true
    }).then(function (Response) {
      console.log("sign up ok:", Response);
      dispatch(loadingProcessAC(false)); // const idTokenData = {
      //     idToken: Response.data.idToken,
      //     localId: Response.data.localId,
      // };
      // dispatch(recieveIdandTokenAC(idTokenData));

      dispatch(errorResponseStatusAC(false));
    })["catch"](function (error) {
      console.log("error catch sign up response: ", error.response.data.error.message);
      dispatch(loadingProcessAC(false));
      dispatch(errorResponseStatusAC(true));
      dispatch(errorMessageAC(error.response.data.error.message));
    });
  };
}; //Log in thunk


exports.signUpThunkCreator = signUpThunkCreator;

var logInThunkCreator = function logInThunkCreator(value) {
  return function (dispatch) {
    dispatch(loadingProcessAC(true));

    _axios["default"].post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic", {
      email: value.mail,
      password: value.pass,
      returnSecureToken: true
    }).then(function (Response) {
      console.log("log in ok:", Response);
      dispatch(loadingProcessAC(false));
      var dataObj = {
        idToken: Response.data.idToken,
        localId: Response.data.localId
      };
      dispatch(recieveIdandTokenAC(dataObj));
      localStorage.setItem('T', Response.data.idToken);
      localStorage.setItem('L', Response.data.localId);
      dispatch(errorResponseStatusAC(false));
    })["catch"](function (error) {
      console.log("error catch log in response: ", error.response.data.error.message);
      dispatch(loadingProcessAC(false));
      dispatch(errorResponseStatusAC(true));
      dispatch(errorMessageAC(error.response.data.error.message));
    });
  };
}; //check if local storage has tokenId Thunk


exports.logInThunkCreator = logInThunkCreator;

var checkTokenThunkCreator = function checkTokenThunkCreator() {
  return function (dispatch) {
    var token = localStorage.getItem('T');
    var localId = localStorage.getItem('L');
    var dataObj = {
      //we also get localId, as our AC expects an object with 2 parametars
      idToken: token,
      localId: localId
    };

    if (token !== null && localId !== null) {
      dispatch(recieveIdandTokenAC(dataObj)); // alert('was found data in LS')
    } else {
      dispatch(logOutAC()); // window.localStorage.clear();
    }

    ;
  };
};

exports.checkTokenThunkCreator = checkTokenThunkCreator;
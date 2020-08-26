"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxForm = require("redux-form");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _burgerReducer = _interopRequireDefault(require("./burgerPage/burger-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("redux");

var reducers = (0, _redux.combineReducers)({
  burgerReducer: _burgerReducer["default"],
  form: _reduxForm.reducer
});
var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
window.store = store;
var _default = store;
exports["default"] = _default;
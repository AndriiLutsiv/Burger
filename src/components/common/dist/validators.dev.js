"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLengthCreator = exports.maxLengthCreator = exports.requiredField = void 0;

var requiredField = function requiredField(value) {
  if (value) {
    return undefined;
  } else {
    return 'Field must not be empty';
  }
};

exports.requiredField = requiredField;

var maxLengthCreator = function maxLengthCreator(max) {
  return function (value) {
    if (value.length > max) {
      return "Max length ".concat(max, " characters allowed");
    } else {
      return undefined;
    }
  };
};

exports.maxLengthCreator = maxLengthCreator;

var minLengthCreator = function minLengthCreator(min) {
  return function (value) {
    if (value.length < min) {
      return "Min length ".concat(min, " characters required");
    } else {
      return undefined;
    }
  };
};

exports.minLengthCreator = minLengthCreator;
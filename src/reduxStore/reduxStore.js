import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import burgerReducer from './burgerPage/burger-reducer';
import authReducer from './authPage/authReducer';
import thunkMiddleware from 'redux-thunk';
import {
    reducer as formReducer
} from 'redux-form';
require("redux");

let reducers = combineReducers({
    burgerReducer: burgerReducer,
    form: formReducer,
    authReducer: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
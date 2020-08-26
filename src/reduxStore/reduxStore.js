import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import {
    reducer as formReducer
} from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import burgerReducer from './burgerPage/burger-reducer';
require("redux");

let reducers = combineReducers({
    burgerReducer: burgerReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
import * as authActionTypes from './auth-actionTypes';

const initialState = {
    loading: false,
    idToken: null,
    localId: null,
    errorResponseStatus: false,
    errorMessage: "",

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case authActionTypes.LOADING_PROCESS: // just loading, that we can display while some async operations are initiated
            return {
                ...state,
                loading: action.boolean,
            };
        case authActionTypes.RECIEVE_ID_AND_TOKEN: //in response from server we recieve an object with necessary idToken and localId
            return {
                ...state,
                idToken: action.dataObj.idToken,
                    localId: action.dataObj.localId,

            };
        case authActionTypes.ERROR_RESPONSE_STATUS: //is used to enable or disable error messages on signUp/LogIn pages
            return {
                ...state,
                errorResponseStatus: action.boolean,
            };
        case authActionTypes.ERROR_MESSAGE: //this puts error messaage from firebase to our state, so we can show it to user on signUp/LogIn pages
            return {
                ...state,
                errorMessage: action.errorMessage,
            };

        case authActionTypes.LOG_OUT: //if logOut we head back to logIn page
            return {
                ...state,
                idToken: null,
                    localId: null,

            };
        default:
            return state;
    }
};

export default authReducer;
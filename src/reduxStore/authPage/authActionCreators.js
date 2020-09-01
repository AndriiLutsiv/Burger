import * as authActionTypes from './auth-actionTypes';
import Axios from "axios";
import {} from 'react-router-dom';
export const loadingProcessAC = (boolean) => {
    return {
        type: authActionTypes.LOADING_PROCESS,
        boolean: boolean
    }
};
export const recieveIdandTokenAC = (dataObj) => {
    return {
        type: authActionTypes.RECIEVE_ID_AND_TOKEN,
        dataObj: dataObj,
    }
};

export const errorResponseStatusAC = (boolean) => {
    return {
        type: authActionTypes.ERROR_RESPONSE_STATUS,
        boolean: boolean,
    }
};

export const errorMessageAC = (errorMessage) => {
    return {
        type: authActionTypes.ERROR_MESSAGE,
        errorMessage: errorMessage,
    }
};


export const logOutAC = () => {
    return {
        type: authActionTypes.LOG_OUT,
    }
}

//signUp thunk
export const signUpThunkCreator = (value) => {
    return (dispatch) => {
        dispatch(loadingProcessAC(true));
        Axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic", {
                    email: value.mail,
                    password: value.pass,
                    returnSecureToken: true
                }
            )
            .then((Response) => {
                console.log("sign up ok:", Response);
                dispatch(loadingProcessAC(false));
                // const idTokenData = {
                //     idToken: Response.data.idToken,
                //     localId: Response.data.localId,
                // };
                // dispatch(recieveIdandTokenAC(idTokenData));
                dispatch(errorResponseStatusAC(false));
            })
            .catch((error) => {
                console.log(
                    "error catch sign up response: ",
                    error.response.data.error.message
                );
                dispatch(loadingProcessAC(false));
                dispatch(errorResponseStatusAC(true));
                dispatch(errorMessageAC(error.response.data.error.message));
            });
    }
}

//Log in thunk
export const logInThunkCreator = (value) => {
    return (dispatch) => {
        dispatch(loadingProcessAC(true));
        Axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs7OgTThyagqJp6H0RTqmIkbdxjKuwBic", {
                    email: value.mail,
                    password: value.pass,
                    returnSecureToken: true
                }
            )
            .then((Response) => {
                console.log("log in ok:", Response);
                dispatch(loadingProcessAC(false));
                const dataObj = {
                    idToken: Response.data.idToken,
                    localId: Response.data.localId,
                };
                dispatch(recieveIdandTokenAC(dataObj));
                localStorage.setItem('T', Response.data.idToken);
                localStorage.setItem('L', Response.data.localId);
                dispatch(errorResponseStatusAC(false));

            })
            .catch((error) => {
                console.log(
                    "error catch log in response: ",
                    error.response.data.error.message
                );
                dispatch(loadingProcessAC(false));
                dispatch(errorResponseStatusAC(true));
                dispatch(errorMessageAC(error.response.data.error.message));
            });
    };
};

//check if local storage has tokenId Thunk
export const checkTokenThunkCreator = () => {
    return (dispatch) => {
        const token = localStorage.getItem('T');
        const localId = localStorage.getItem('L');

        const dataObj = { //we also get localId, as our AC expects an object with 2 parametars
            idToken: token,
            localId: localId,
        };
        if (token !== null && localId !== null) {
            dispatch(recieveIdandTokenAC(dataObj));
            // alert('was found data in LS')
        } else {
            dispatch(logOutAC());
            // window.localStorage.clear();

        };

    };
};
import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCd_Y1f_Ig1k82C3QEfslk8TuVCAYS7oAg';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCd_Y1f_Ig1k82C3QEfslk8TuVCAYS7oAg'
        };

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    }
}
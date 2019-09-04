import * as actionTypes from '../actions/actionTypes';
import * as reducerFuncs from './functions/auth';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return reducerFuncs.authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return reducerFuncs.authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return reducerFuncs.authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return reducerFuncs.authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return reducerFuncs.setAuthRedirectPath(state, action);
        default:
            return state;          
    }
};

export default reducer;
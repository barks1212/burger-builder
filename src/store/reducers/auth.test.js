import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    const initialState = {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should store the token upon login', () => {
        const action = {type: actionTypes.AUTH_SUCCESS, idToken: 'some-token', userId: 'some-user-id'};
        expect(reducer(initialState, action)).toEqual({...initialState, token: 'some-token', userId: 'some-user-id'});
    });
});
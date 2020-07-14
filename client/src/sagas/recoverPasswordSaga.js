import {put} from 'redux-saga/effects';
import * as restController from '../api/rest/restController';
import ACTION from '../actions/actionTypes';
import history from '../browserHistory';

export function* updateUserPassword(action) {
    try {
        const { data } = yield restController.recoverPassword(action.token);
        yield put({ type: ACTION.RECOVER_PASSWORD_SUCCESS, data });
        window.alert('Message with link for recovering new password sent to your email.');
        history.replace('/login');
    } catch (error) {
        yield put({ type: ACTION.RECOVER_PASSWORD_ERROR, error: error.response });
    }
}

export function* updateUserPasswordConfirm(action) {
    try {
        const { data } = yield restController.recoverPasswordConfirm({token: action.token});
        yield put({ type: ACTION.RECOVER_PASSWORD_CONFIRM_SUCCESS, data });
        window.alert('Your password was recovered.');
        history.replace('/login');
    } catch (error) {
        yield put({ type: ACTION.RECOVER_PASSWORD_CONFIRM_ERROR, error: error.response })
    }
}
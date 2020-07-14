import ACTION from '../actions/actionTypes';

const initialState = {
    message: null,
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.RECOVER_PASSWORD_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }

        case ACTION.RECOVER_PASSWORD_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                message: action.message,
            }
        }

        case ACTION.RECOVER_PASSWORD_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        }

        case ACTION.RECOVER_PASSWORD_CONFIRM_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }

        case ACTION.CLEAR_RECOVER_PASSWORD_ERROR: {
            return {
                ...state,
                error: null
            }
        }

        default: {
            return state
        }
    }
}
import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
    offers: [],
    isChangeOfferStatus: false,
    isFetching: true,
    totalHave: null,
    // moderationStatus: CONSTANTS.OFFER_STATUS_CONFIRM,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_OFFERS_ACTION_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                offers: [...action.data.rows],
                isChangeOfferStatus: false,
                totalHave: action.data.count,
                error: null
            }
        }
        case ACTION.GET_OFFERS_ACTION_ERROR: {
            return {
                ...state,
                isFetching: false,
                offers: [],
                totalHave: null,
                error: action.error
            }
        }
        default:
            return state;
    }
}
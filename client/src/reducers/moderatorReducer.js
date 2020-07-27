
import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
    isFetching: true,
    error: null,
    offers: [],
    moderationStatus: CONSTANTS.OFFER_STATUS_CONFIRM,
    isChangeOfferStatus: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.MODERATOR_CONFIRM_OFFER_REQUEST:
        case ACTION.MODERATOR_REJECT_OFFER_REQUEST: {
            return {
                ...state,
                isChangeOfferStatus: true,
                isFetching: true,
            }
        }
        case ACTION.MODERATOR_CONFIRM_OFFER_SUCCESS:
        case ACTION.MODERATOR_REJECT_OFFER_SUCCESS: {
            return {
                ...state,
                error: null,
                offers: [...action.data],
                isChangeOfferStatus: true
            }
        }
        case ACTION.MODERATOR_CONFIRM_OFFER_ERROR:
        case ACTION.MODERATOR_REJECT_OFFER_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return {
                ...state
            };
    }
}
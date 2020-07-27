import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
    offers: [],
    isChangeOfferStatus: false,
    isFetching: true,
    totalHave: null,
    moderationStatus: CONSTANTS.OFFER_STATUS_CONFIRM,
    error: null,
    haveMore: true
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
                error: null,

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
        case ACTION.CLEAR_CONTESTS_LIST: {
            return {
                ...state,
                error: null,
                offers: []
            }
        }
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
            return {...state,
                isChangeOfferStatus: false
            };
    }
}
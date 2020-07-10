import ACTION from '../actions/actionTypes';
import moment from 'moment';

const initialState = {
    events: [
        {
            eventName: 'Winter is coming',
            eventDate: moment('01.12.2020', 'DD.MM.YYYY'),
            notifyDate: moment('20.11.2020', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY')
        },
        {
            eventName: 'Autumn is coming',
            eventDate: moment('01.09.2020', 'DD.MM.YYYY'),
            notifyDate: moment('20.08.2020', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY'),
        },
        {
            eventName: 'Spring is coming',
            eventDate: moment('01.03.2021', 'DD.MM.YYYY'),
            notifyDate: moment('20.02.2021', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY'),
        },
        {
            eventName: 'Summer is coming',
            eventDate: moment('01.06.2021', 'DD.MM.YYYY'),
            notifyDate: moment('20.05.2021', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY'),
        },
        {
            eventName: 'New Year',
            eventDate: moment('31.12.2020','DD.MM.YYYY'),
            notifyDate: moment('20.12.2020','DD.MM.YYYY'),
            createdDate: moment('01.05.2020','DD.MM.YYYY'),
        },
        {
            eventName: 'Victory Day',
            eventDate: moment('09.05.2021', 'DD.MM.YYYY'),
            notifyDate: moment('05.05.2021', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY'),
        },
        {
            eventName: 'Programmers day',
            eventDate: moment('13.09.2020', 'DD.MM.YYYY'),
            notifyDate: moment('11.09.2020', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY'),
        },
        {
            eventName: 'Independence Day',
            eventDate: moment('24.08.2020', 'DD.MM.YYYY'),
            notifyDate: moment('05.05.2020', 'DD.MM.YYYY'),
            createdDate: moment('01.05.2020', 'DD.MM.YYYY'),
        },
        {
            eventName: 'First of May',
            eventDate: moment('01.05.2020', 'DD.MM.YYYY'),
            notifyDate: moment('07.04.2020', 'DD.MM.YYYY'),
            createdDate: moment('01.04.2020', 'DD.MM.YYYY'),
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CREATE_EVENT: {
            state.events.push(action.data);
            return state;
        }
        case ACTION.DELETE_EVENT: {
            state.events.splice(action.data, 1);
            return {
                events: [...state.events]
            }
        }
        default:
            return state;
    }
};
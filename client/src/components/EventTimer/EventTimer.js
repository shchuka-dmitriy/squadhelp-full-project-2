import React, {useEffect, useState} from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EventTimer = props => {
    const {eventDate} = props;
    const [leftTime, setLeftTime] = useState( getLeftTime() );
    const now = moment();
    /*
    Var. #2
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);*/

    /**
     *
     * @description Calculates time left before event
     * @return {Object} timeLeftElements
     * */
    function getLeftTime() {
        const timeToEvent = moment(eventDate).diff(now);
        const lastingTime = moment.duration(timeToEvent);
        const d = lastingTime.asDays() > 1 ? Math.floor(lastingTime / (1000*60*60*24)) : 0;
        const h = lastingTime.asHours() > 1 && lastingTime.hours();
        const m = lastingTime.asMinutes() > 1 && lastingTime.minutes();
        const s = lastingTime.asSeconds() > 1 && lastingTime.seconds();
        const timeLeftElements = { d, h, m, s};
        return ( lastingTime > 0 ? timeLeftElements : {} );
    }

    useEffect( () => {
        const timeoutId = setTimeout( () => {
            setLeftTime(getLeftTime());
            /*
            Var. #2
            const timerArr = getLeftTime() ;
            const {d, h, m, s, lastingTime} = timerArr;
            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
            if (lastingTime < 0) {
                clearInterval(timeoutId);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
            */
        }, 1000);
        if (eventDate < now) {
            clearInterval(timeoutId);
        }
        return () => clearTimeout(timeoutId);
    });

    /**
     *
     * @return {html[]} - html elements
     */
    const renderEventTimer = () => (
            Object.entries(leftTime).map( ([key, value], index) => (
                (value > 0) && <span key={index}>{`${value}${key} `}</span>
            )
        /*        Var. # 2
        <span>{`${days}d ${hours}h ${minutes}m ${seconds}s `}</span>*/
        )
    );

    return (
        <span>
            { (eventDate > now) ? renderEventTimer() : <span>Time is up!</span> }
        </span>
    );
};

EventTimer.propTypes = {
    eventDate: PropTypes.instanceOf(moment).isRequired
};

const mapStateToProps = (state) => {
    return state.eventStore
};

export default connect(mapStateToProps)(EventTimer);
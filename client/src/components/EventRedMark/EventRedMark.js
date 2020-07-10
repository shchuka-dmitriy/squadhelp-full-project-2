import React, { useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './EventRedMark.module.sass';
import CONSTANTS from "../../constants";

const EventRedMark = (props) => {
    const {events} = props;
    const [now, setNow] = React.useState(moment());
    useEffect(() => {
        const timer = setInterval(() => {
            setNow( moment() );
        }, 10000);
        return () => {
            clearInterval(timer);
        }
    });

    /**
     *
     * @type {number} count - total value of upcoming and passed events
     */
    let count = 0;
    const getUpcomingEventsCount = events.reduce( (upcomingEventsCount, event) => {
        if ( event.notifyDate.isBefore(now) && event.eventDate.isAfter(now)) {
            upcomingEventsCount++;
            count++
        }
        return upcomingEventsCount;
    }, 0);
    const getPassedEventsCount = events.reduce( (pastedEventsCount, event) => {
        if ( event.eventDate < now ) {
            pastedEventsCount++;
            count++
        }
        return pastedEventsCount;
    }, 0);

    /**
     *
     * @return {String} - message about upcoming and/or passed events
     */
    const renderEventMessage = () => {
        return getUpcomingEventsCount && getPassedEventsCount
            ? `You have ${getUpcomingEventsCount} upcoming events and ${getPassedEventsCount} passed events!`
            : getUpcomingEventsCount
                ? `You have ${getUpcomingEventsCount} upcoming events!`
                : `You have ${getPassedEventsCount} passed events!`
    };

    return (
        <div className={styles.redMarkContainer}>
            <Link to='/event' style={{textDecoration: 'none'}} >
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${ !count ? 'calendar-clock.png'
                    : 'calendar-clock-red4.png'}` } className={styles.eventIcon} alt='clock'
                />
            </Link>
            <Link to='/event' className={styles.eventsCount}>
                { count > 0 &&
                <div>
                    {count}
                    <span className={styles.helpMessage}>{ renderEventMessage() }</span>
                </div>
                }
            </Link>
        </div>
    );
};
const mapStateToProps = (state) => {
    return state.eventStore
};

export default connect(mapStateToProps)(EventRedMark);
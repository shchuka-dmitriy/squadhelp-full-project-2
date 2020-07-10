import React, { useState, useEffect } from 'react';
import moment from "moment";
import styles from './EventItem.module.sass';
import classNames from 'classnames';
import { deleteEvent } from '../../actions/actionCreator';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import EventTimer from "../EventTimer/EventTimer";
import CONSTANTS from "../../constants";

const EventItem = (props) => {
    const {id, eventName, eventDate, notifyDate, createdDate, deleteEvent} = props;
    const [now, setNow] = useState(moment());
    useEffect( () => {
        const timerId = setTimeout( () => {
            setNow(moment());
        }, 1000);
        return () => clearTimeout(timerId);
    });

    /**
     *
     * @description Delete event
     * @param {Class} event
     */
    const deleteCurrentEvent = (event) => {
        if ( window.confirm('Are you sure wish to delete this event?') ) {
            deleteEvent(event.currentTarget.id);
        }
    };

    /**
     *
     * @description Creates event element
     * @return {html} - Event element
     */
    const renderEventItem = () => {
        const progressLength = Math.round(100 - ((eventDate.diff(now) / eventDate.diff(createdDate)) * 100));
        const width = progressLength <= 0 ? 0 : progressLength > 100 ? 100 : progressLength;
        const className = classNames(styles.progressBar, {[styles.conditionalProgressBar]: now > notifyDate});

        return (
            <div className={styles.eventItemContainer}>
                <div className={className} style={ {width: `${width}%`} }/>
                <span className={styles.eventName}>{eventName}</span>
                <div>
                    <EventTimer eventDate={eventDate} notifyDate={notifyDate}/>
                    <img id={id} onClick={deleteCurrentEvent} src={`${CONSTANTS.STATIC_IMAGES_PATH}delete-forever.png`}
                         className={styles.deleteButton} alt='delete'/>
                </div>
            </div>
        )
    };

    return (
        <>
            { renderEventItem() }
        </>
    );
};

EventItem.propTypes = {
    id: PropTypes.number,
    eventName: PropTypes.string.isRequired,
    eventDate: PropTypes.instanceOf(moment).isRequired,
    notifyDate: PropTypes.instanceOf(moment).isRequired,
    deleteEvent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (data) => { dispatch(deleteEvent(data)) }
    }
};

export default connect(null, mapDispatchToProps)(EventItem);
import React from 'react';
import EventItem from "../EventItem/EventItem";

const EventsList = (props) => {
    const {events} = props;

    /**
     *
     * @description Creates events array list
     * @returns {EventItem[]} - Array of events item
     */
    const createEventsList = () => {
        const eventsList = [];
        events.forEach( (event, index) => {
            eventsList.push(
                <EventItem id={index} key={index + 1} {...event}/>
            )});
        return eventsList;
    };

    return (
        <div>
            { createEventsList() }
        </div>
    );
};

export default EventsList;
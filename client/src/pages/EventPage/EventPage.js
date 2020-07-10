import React, {useState} from 'react';
import {connect} from 'react-redux';
import styles from './EventPage.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EventForm from '../../components/EventForm/EventForm';
import EventsList from '../../components/EventsList/EventsList';

const EventPage = (props) => {
    const {events} = props;
    const [isRenderForm, setRenderForm] = useState(false);
    const renderEventForm = () => {
        setRenderForm(!isRenderForm);
    };

    /**
     *
     * @description Sorts events
     * @param {Object} firstEvent
     * @param {Object} secondEvent
     * @returns {Number} - Sorting options
     */
    const sortFunc = (firstEvent, secondEvent) => {
        return (firstEvent.eventDate).diff(secondEvent.eventDate);
    };
    events.sort(sortFunc);

    return (
        <div>
            <Header/>
            <div className={styles.eventsContentContainer}>
                <h1 className={styles.eventsHeader}>My upcoming events</h1>
                <div className={styles.eventsListContainer}>
                    { events.length && events.length !== 0 ?
                        <EventsList events={events}/>
                        :
                        <div className={styles.eventsListEmpty}>You don't have events</div>
                    }
                </div>
                <div className={styles.createEventButton} onClick={renderEventForm}>
                    <span>Create Event</span>
                </div>
                { isRenderForm && <EventForm isFormRender={renderEventForm}/> }
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.eventStore
};

export default connect(mapStateToProps, null)(EventPage);
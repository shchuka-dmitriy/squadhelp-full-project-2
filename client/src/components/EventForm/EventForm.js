import React from 'react';
import moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createEvent } from "../../actions/actionCreator";
import FormInput from "../FormInput/FormInput";
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchemes';
import styles from './EventForm.module.sass';

const EventForm = ({handleSubmit, isFormRender, createEvent, reset}) => {
    const formInputClassNames = {
        container: styles.inputContainer,
        input: styles.input,
        valid: styles.valid,
        notValid: styles.notValid,
        warning: styles.fieldWarning
    };

    const onSubmit = (eventsData) => {
        if ( window.confirm('Are you sure wish to create new event?') ) {
            createEvent({
                eventName: eventsData.eventName,
                eventDate: moment(eventsData.eventDate, 'YYYY.MM.DD'),
                notifyDate: moment(eventsData.notifyDate, 'YYYY.MM.DD'),
                createdDate: moment()
            });
        }
        isFormRender();
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.eventFormContainer}>
                <span className={styles.fieldLabel}>Event name</span>
                <Field
                    name = 'eventName'
                    classes = {formInputClassNames}
                    component = {FormInput}
                    type = 'text'
                    label = 'Event name'
                />
                <span className={styles.fieldLabel}>Event date</span>
                <Field
                    name = 'eventDate'
                    classes = {formInputClassNames}
                    component = {FormInput}
                    type = 'date'
                    value = "YYYY-MM-DD"
                    label = 'Event date'
                />
                <span className={styles.fieldLabel}>Notify date</span>
                <Field
                    name = 'notifyDate'
                    classes = {formInputClassNames}
                    component = {FormInput}
                    type = 'date'
                    label = 'Notify date'
                />
                <button type='submit' className={styles.submitContainer}>
                    <span className={styles.submitButton}>create new event</span>
                </button>
                <button type='button' className={styles.submitContainer} onClick={reset}>
                    <span className={styles.submitButton}>clear values</span>
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.eventStore
};

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => { dispatch( createEvent(event) ) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'eventForm',
    validate: customValidator(Schemes.EventSchema)
})(EventForm));
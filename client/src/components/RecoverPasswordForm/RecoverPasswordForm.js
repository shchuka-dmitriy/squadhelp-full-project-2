import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {recoverPassword, clearRecoverPasswordError} from '../../actions/actionCreator';
import styles from './RecoverPasswordForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchemes';
import FormInput from '../FormInput/FormInput';

const RecoverPasswordForm = ({handleSubmit, isFetching, recoverPassword, clearError}) => {

    useEffect(() => {
        clearError();
    }, []);

    const onSubmit = (values) => {
        recoverPassword(values);
    };

    const formInputClassNames = {
        container: styles.inputContainer,
        input: styles.input,
        valid: styles.valid,
        notValid: styles.notValid,
        warning: styles.fieldWarning
    };

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) } className={styles.recoverFormContainer}>
                <Field
                    name='email'
                    classes={formInputClassNames}
                    component={FormInput}
                    type='text'
                    label='User email'
                />
                <Field
                    name='password'
                    classes={formInputClassNames}
                    component={FormInput}
                    type='password'
                    label='User password'
                />
                <button type='submit' disabled={isFetching} className={styles.submitContainer}>
                    <span className={styles.inscription}>create new password</span>
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    recoverPassword: (data) => dispatch(recoverPassword(data)),
    clearError: () => dispatch(clearRecoverPasswordError()),
});

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'recoverPasswordForm',
    validate: customValidator(Schemes.LoginSchema),
})(RecoverPasswordForm));
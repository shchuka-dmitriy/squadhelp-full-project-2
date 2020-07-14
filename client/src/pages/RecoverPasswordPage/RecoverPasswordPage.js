import React from "react";
import styles from './RecoverPasswordPage.module.sass';
import {connect} from 'react-redux';
import {clearRecoverPasswordError} from "../../actions/actionCreator";
import {Link} from "react-router-dom";
import RecoverPasswordForm from '../../components/RecoverPasswordForm/RecoverPasswordForm';
import Footer from "../../components/Footer/Footer";

const RecoverPasswordPage = () => {

    return (
        <div className={styles.recoverPassContainer}>
            <header className={styles.recoverPassHeaderContainer}>
                <Link to='/' className={styles.logo}>
                    <img src={`https://www.squadhelp.com/img/login_logo.png`} alt="logo"/>
                </Link>
            </header>
            <div className={styles.resetPassFormContainer}>
                <h2 className={styles.resetPassButton}>reset your password</h2>
                <RecoverPasswordForm/>
            </div>
            <Footer/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(clearRecoverPasswordError()),
});

export default connect(null, mapDispatchToProps)(RecoverPasswordPage);
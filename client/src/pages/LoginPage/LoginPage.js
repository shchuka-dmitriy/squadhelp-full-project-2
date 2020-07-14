import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';

const LoginPage = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to={'/'}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/registration' style={{textDecoration: 'none'}}>
                            <span>Signup</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.loginFormContainer}>
                    <h2 className={styles.loginFormHeader}>LOGIN TO YOUR ACCOUNT</h2>
                    <LoginForm/>
                    <Link to='/recoverPassword' className={styles.forgotPasswordLink}>forgot password</Link>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);
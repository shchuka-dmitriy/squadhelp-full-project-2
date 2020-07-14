import React, {useEffect} from "react";
import styles from './RecoverPasswordConfirmPage.module.sass';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {recoverPasswordConfirm, clearRecoverPasswordError} from '../../actions/actionCreator';
import Footer from "../../components/Footer/Footer";

const RecoverPasswordConfirmPage = ({match: {params: {token}}, recoverPasswordConfirm, clearError, isFetching}) => {

    useEffect(() => {
        clearError()
    }, []);

    const onClickHandler = () => {
        if (!isFetching) {
            recoverPasswordConfirm(token);
        }
    };

    return (
        <div className={styles.confirmPageMainContainer}>
            <header className={styles.pageHeaderContainer}>
                <Link to='/' className={styles.logo}>
                    <img src={`https://www.squadhelp.com/img/login_logo.png`} alt="logo"/>
                </Link>
            </header>
            <div className={styles.resetPasswordFormContainer}>
                <h2 className={styles.resetPasswordFormHeader}>Are you sure you want to recover password?</h2>
                <div className={styles.choseAnswerContainer}>
                    <div onClick={ onClickHandler }>yes</div>
                    <Link to='/'>no</Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    recoverPasswordConfirm: (token) => dispatch(recoverPasswordConfirm(token)),
    clearError: () => dispatch(clearRecoverPasswordError()),
});

export default connect(null, mapDispatchToProps)(RecoverPasswordConfirmPage);

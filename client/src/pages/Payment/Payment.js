import React from 'react';
import {connect} from 'react-redux';
import {payRequest, clearPaymentStore} from '../../actions/actionCreator';
import PayForm from '../../components/PayForm/PayForm';
import styles from './Payment.module.sass';
import isEmpty from 'lodash/isEmpty';
import CONSTANTS from '../../constants';
import Error from '../../components/Error/Error';

const Payment = ({history, pay, contestStore: {contests}, clearPaymentStore, payment: {error}}) => {

    const sendPayment = (values) => {
        const contestArray = [];
        Object.keys(contests).forEach(key => contestArray.push(contests[key]));
        const {number, expiry, cvc} = values;
        const data = new FormData();
        for (let i = 0; i < contestArray.length; i++) {
            data.append('files', contestArray[i].file);
            contestArray[i].haveFile = !!contestArray[i].file;
        }
        data.append('number', number);
        data.append('expiry', expiry);
        data.append('cvc', cvc);
        data.append('contests', JSON.stringify(contestArray));
        data.append('price', contestArray.length === 3 ? '99' : '100');
        pay({
            formData: data
        });
    };

    const goBack = () => {
        history.goBack();
    };

    if (isEmpty(contests)) {
        history.replace('startContest');
    }
    return (
        <div>
            <div className={styles.header}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} alt='blue-logo'/>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.paymentContainer}>
                    <span className={styles.headerLabel}>Checkout</span>
                    {error && <Error data={error.data} status={error.status} clearError={clearPaymentStore}/>}
                    <PayForm sendRequest={sendPayment} back={goBack} isPayForOrder={true}/>
                </div>
                <div className={styles.orderInfoContainer}>
                    <span className={styles.orderHeader}>Order Summary</span>
                    <div className={styles.packageInfoContainer}>
                        <span className={styles.packageName}>Package Name: Standard</span>
                        <span className={styles.packagePrice}>$100 USD</span>
                    </div>
                    <div className={styles.resultPriceContainer}>
                        <span>Total:</span>
                        <span>$100.00 USD</span>
                    </div>
                    <a href="http://www.google.com">Have a promo code?</a>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        payment: state.payment,
        contestStore: state.contestStore
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        pay: (data) => dispatch(payRequest(data)),
        clearPaymentStore: () => dispatch(clearPaymentStore())
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(Payment);


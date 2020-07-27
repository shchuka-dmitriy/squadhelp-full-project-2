import React from 'react';
import CONSTANTS from '../../constants';
import classNames from 'classnames';
import styles from './OffersRenderOptions.module.sass';
import PropTypes from 'prop-types';

const OffersRenderOptions = ({renderOptions: {limit, offset, offerStatus}, setRenderOptions}) => {

    const setNewOptions = (status) => {
        if (status !== offerStatus) {
            const newOptions = {
                limit,
                offset,
                offerStatus: status,
                isChanged: true
            };
            setRenderOptions(newOptions);
        }
    };

    return (
        <div className={styles.btnContainer}>
            <button className={classNames(styles.filter, offerStatus === CONSTANTS.OFFER_STATUS_REJECTED && styles.activeFilter)}
                    onClick={() => setNewOptions(CONSTANTS.OFFER_STATUS_REJECTED)}>rejected
            </button>
            <button className={classNames(styles.filter, offerStatus === CONSTANTS.OFFER_STATUS_CONFIRM && styles.activeFilter)}
                    onClick={() => setNewOptions(CONSTANTS.OFFER_STATUS_CONFIRM)}>confirmed
            </button>
            <button className={classNames(styles.filter, offerStatus === CONSTANTS.OFFER_STATUS_PENDING && styles.activeFilter)}
                    onClick={() => setNewOptions(CONSTANTS.OFFER_STATUS_PENDING)}>pending
            </button>

        </div>
    );
};

OffersRenderOptions.propTypes = {
    renderOptions: PropTypes.object.isRequired,
    setRenderOptions: PropTypes.func.isRequired
};

export default OffersRenderOptions;
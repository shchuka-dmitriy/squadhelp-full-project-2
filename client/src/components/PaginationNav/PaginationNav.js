import React from 'react';
import classNames from 'classnames';
import styles from './PaginationNav.module.sass';
import PropTypes from 'prop-types';

const PaginationNav = ({loadMore, totalHave, offersLength, offset}) => {

    const haveMore = totalHave > (offersLength + offset);
    const prevButtonHandler = () => {
        if (offset > 0) return () => loadMore(-8)
    };
    const nextButtonHandler = () => {
        if (haveMore) return () => loadMore(8)
    };

    return (
        <div>
            <div className={styles.paginationContainer}>
                <button className={classNames(styles.paginationButton, offset === 0 && styles.notActive)}
                        onClick={prevButtonHandler()}>prev
                </button>
                <button className={classNames(styles.paginationButton, !haveMore && styles.notActive)}
                        onClick={nextButtonHandler()}>next
                </button>
            </div>

        </div>
    );
};

PaginationNav.propTypes = {
    loadMore: PropTypes.func.isRequired,
    totalHave: PropTypes.number,
    offersLength: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
};

export default PaginationNav;

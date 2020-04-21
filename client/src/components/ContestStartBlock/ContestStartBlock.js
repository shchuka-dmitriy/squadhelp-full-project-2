import React from "react";
import { Link } from 'react-router-dom';
import styles from './ContestStartBlock.module.sass';

const ContestStartBlock = () => {
    return (
        <div className={styles.mainContestStartContainer}>
            <div className={styles.blockContainer}>
                <div>
                    Ready to get started? Launch a contest and start receiving submissions instantly.
                </div>
                <Link to={'/startContest'} className={styles.buttonContainer}>
                    <div className={styles.buttonElem}>
                        <i className={'far fa-lightbulb mr-1'}/>
                        Start A Contest
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default ContestStartBlock;
import React from 'react';
import styles from './StartContestButton.module.sass';

const StartContestButton = () => {
    return (
        <div className={styles.startContestContainer}>
            <a href={'https://www.squadhelp.com/contesttype'} className={styles.startContestButton}>
                start a contest
            </a>
        </div>
    );
};

export default StartContestButton;
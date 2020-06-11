import React from 'react';
import styles from './GetInTouch.module.sass';
import Icon from "@iconify/react";
import emailMark from "@iconify/icons-fa/envelope-o";

const GetInTouch = () => {
    return (

        <div className={styles.getInTouchContainer}>
            <div className={styles.getInTouchWrapper}>
                <div className={styles.emailMarkContainer}>
                    <div className={styles.emailMarkWrapper}>
                        <Icon icon={emailMark} className={styles.emailMark}/>
                    </div>
                </div>
                <div className={styles.getInTouchQuestionContainer}>
                    <div className={styles.getInTouchQuestionTitle}>
                        Questions?
                    </div>
                    <div className={styles.getInTouchQuestionContent}>
                        Check out our&#160;
                        <a href='http://help.squadhelp.com'>FAQs </a>
                        or send us a&#160;
                        <a href="#">message</a>.
                        For assistance with launching a contest, you can also call us at (877) 355-3585 or
                        schedule a&#160;
                        <a href="#">Branding Consultation</a>
                    </div>
                </div>
                <div className={styles.getInTouchButtonContainer}>
                    <a className={styles.getInTouchButton}>get in touch</a>
                </div>
            </div>
        </div>

    );
};

export default GetInTouch;
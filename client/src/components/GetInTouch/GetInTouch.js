import React from 'react';
import styles from './GetInTouch.module.sass';
import Icon from "@iconify/react";
import emailMark from "@iconify/icons-fa/envelope-o";
import {Link} from "react-router-dom";

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
                        <Link to='http://help.squadhelp.com'>FAQs </Link>
                        or send us a&#160;
                        <Link to='/'>message</Link>.
                        For assistance with launching a contest, you can also call us at (877) 355-3585 or
                        schedule a&#160;
                        <Link to='/'>Branding Consultation</Link>
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
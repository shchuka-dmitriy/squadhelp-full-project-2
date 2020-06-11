import React, {useState} from 'react';
import classNames from 'classnames'
import styles from './ScrollUpButton.module.sass';

const ScrollUpButton = () => {

    /*
    * Using Hook "useState"
    * for give the scrollUpButton its own state values
    * and change it
    * */
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 110){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 110){
            setShowScroll(false)
        }
    };

    const checkVisibility = classNames( styles.scrollUpButton,
        { [ styles.showScrollUp ]: window.pageYOffset > 110 } );

    const scrollTop = () => {
        window.scrollTo({top: 0});
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <a href='#header' className={checkVisibility} onClick={scrollTop}>
            <i className="fas fa-arrow-up"/>
        </a>
    );
};

export default ScrollUpButton;
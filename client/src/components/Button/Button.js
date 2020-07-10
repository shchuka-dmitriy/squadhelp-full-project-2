import React from 'react';
import styles from './Button.module.sass';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {answer, description, buttonNumber, selectedButton, setSelectedButton} = props;
    const onClickHandler = () => {
        setSelectedButton(buttonNumber);
    };

    return (
        <div className={ classNames(styles.buttonContainer, (buttonNumber === selectedButton) && [styles.activeButton])}
             onClick={onClickHandler}>
            <div className={ classNames(styles.buttonAnswer,
                (buttonNumber === selectedButton) && [styles.buttonSelectedAnswer])}>{answer}</div>
            <h5>{description}</h5>
        </div>
    );
};

Button.propTypes = {
    setSelectedButton: PropTypes.func.isRequired,
    selectedButton: PropTypes.number.isRequired,
    buttonNumber: PropTypes.number.isRequired,
    answer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Button;
import React, {useState} from 'react';
import buttonGroupList from '../../assets/buttonGroupList';
import styles from './ButtonGroup.module.sass';
import Button from '../Button/Button';

const ButtonGroup = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    /**
     *
     * @description Creates button-answers list
     * @return {Button[]} - array of button-answers
     */
    const renderButtonsGroup = () => {
        const answerArr = [...buttonGroupList];
        return answerArr.map( (item, index) => {
            return <Button key={index} buttonNumber={index} selectedButton={selectedButton}
                           setSelectedButton={setSelectedButton} {...item}/>;
        });
    };

    return (
        <div>
            <div className={styles.buttonGroupContainer}>
                <h5 className={styles.buttonGroupHeaderTitle}>
                    Do you want a matching domain (.com URL) with your name?
                </h5>
                <p className={styles.buttonGroupHeaderContent}>
                    If you want a matching domain, our platform will only accept those name suggestions where
                    the domain is available. (Recommended)
                </p>
            </div>
            <div className={styles.buttonsContainer}>
                { renderButtonsGroup() }
            </div>
        </div>
    )
};

export default ButtonGroup;
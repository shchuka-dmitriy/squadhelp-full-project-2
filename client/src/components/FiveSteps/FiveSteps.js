import React from 'react';
import styles from './FiveSteps.module.sass';

const FiveSteps = () => {
    return (
        <div className={styles.fiveStepsContainer}>
            <h2 className={styles.fiveStepsContainerHeader}>5 Simple Steps</h2>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepContainer}>
                    <div className={styles.stepNumber}>1</div>
                    <h4 className={styles.stepName}>Start Your Contest</h4>
                    <p className={styles.stepContest}>Complete our fast, easy project brief template, and
                        we’ll share it with our community of more than 70,000 Creatives.</p>
                </div>

                <div className={styles.stepContainer}>
                    <div className={styles.stepNumber}>2</div>
                    <h4 className={styles.stepName}>Ideas Start Pouring In</h4>
                    <p className={styles.stepContest}>You will start receiving name ideas - created
                        specifically for you - within minutes. Dozens of contestants work for you at the
                        same time! A typical naming contest receives several hundred name ideas. All ideas
                        are automatically checked for URL availability.</p>
                </div>

                <div className={styles.stepContainer}>
                    <div className={styles.stepNumber}>3</div>
                    <h4 className={styles.stepName}>Collaborate and Communicate</h4>
                    <p className={styles.stepContest}>See all your submissions from your contest dashboard.
                        Rate entries, leave private comments, and send public messages, leading the process
                        towards the perfect name.</p>
                </div>

                <div className={styles.stepContainer}>
                    <div className={styles.stepNumber}>4</div>
                    <h4 className={styles.stepName}>Validate</h4>
                    <p className={styles.stepContest}>Choose your name with confidence. Our unique validation
                        process includes domain checks, trademark risk assessment, linguistics analysis, and
                        professional audience testing.</p>
                </div>

                <div className={styles.stepContainer}>
                    <div className={styles.stepNumber}>5</div>
                    <h4 className={styles.stepName}>Pick your winner!</h4>
                    <p className={styles.stepContest}>Once your contest ends, announce the winner - and
                        register the name. Come back to Squadhelp to launch a Logo Design or Tagline project
                        for your name.</p>
                </div>
            </div>
        </div>
    );
};

export default FiveSteps;
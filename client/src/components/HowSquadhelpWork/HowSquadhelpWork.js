import React from 'react';
import styles from './HowSquadhelpWork.module.sass';

const HowSquadhelpWork = () => {
    return (
        <div className={styles.howDoesWorkContainer}>
            <div className={styles.videoWrapper}>
                <div style={{padding: '56.90% 0 0 0', position: 'relative'}}>
                    <div style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
                        <iframe title="Wistia video player"
                                allowFullScreen
                                frameBorder="0"
                                scrolling="no"
                                src="https://fast.wistia.net/embed/iframe/vfxvect60o"
                                className={styles.video}/>
                    </div>
                </div>
            </div>
            <div className={styles.DescriptionWrapper}>
                <h2 className={styles.howDoesWorkHeader}>
                    how does squadhelp work?
                </h2>
                <p className={styles.howDoesWorkContent}>
                    Squadhelp allows you to host branding competitions to engage with the most
                    creative people across the globe and get high-quality results, fast. Thousands
                    of creatives compete with each other, suggesting great name ideas. At the end
                    of the collaborative contest, you select one winner. The winner gets paid, and
                    you get a strong brand name that will help you succeed! It's quick, simple, and
                    costs a fraction of an agency.
                </p>
            </div>
        </div>
    );
};

export default HowSquadhelpWork;
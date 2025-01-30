import React from 'react';
import styles from './Footer.module.css';
import { ArrowUpIcon, HorizontalLineIcon } from '../assets/icons';

const Footer = () =>
(
    <footer className={`wrap ${styles.mainContainer}`}>
        <div className={`content ${styles.footerContainer}`}>
            <h2 className={`title `}>Footer :)</h2>
            <p>I&apos;d like to use this section of the web app to put any final thoughts.<br></br>
                Thank you to my friends, my family, and my love for supporting me throughout this journey. I have had a blast with what I have accomplished, and look forward to what can be done in the future. Happy coding!</p>
            <div class={`${styles.buttonContainer}`}>
                <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className={styles.scrollToTopButton} aria-label="Back to top?">
                    <div className={styles.icons}>
                        <div className={styles.upArrowIcon}>
                            <ArrowUpIcon />
                        </div>
                        <div className={styles.horizontalLineIcon}>
                            <HorizontalLineIcon />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </footer>
)


export default Footer;
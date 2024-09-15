import React from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { selectToggle } from '../Header/HeaderSlice';

const Footer = () =>
(
    <footer className={styles.footer_container}>
        <h2>Footer :)</h2>
        <p>I&apos;d like to use this section of the web app to put any final thoughts.<br></br>
            Thank you to my friends, my family, and my love for supporting me throughout this journey. I have had a blast with what I have accomplished, and look forward to what can be done in the future. Happy coding!</p>
        <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className={styles.to_top} aria-label="Back to top?">
            <div className={styles.icons}>
                <svg viewBox="0 0 24 24" className={styles.up_arrow}>
                    <path d="M18.427,4.911,14.508.992a3.583,3.583,0,0,0-4.95,0L5.639,4.911A1.5,1.5,0,0,0,7.76,7.032l2.78-2.78.023,18.25a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5L13.54,4.266l2.766,2.766a1.5,1.5,0,1,0,2.121-2.121Z" />
                </svg>
                <svg viewBox="0 0 24 24" className={styles.hor_line}>
                    <path d="M23,13H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Z" />
                </svg>
            </div>
        </button>
    </footer>
)


export default Footer;
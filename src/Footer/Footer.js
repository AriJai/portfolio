import React from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { selectToggle } from '../Header/HeaderSlice';

const Footer = () => {
    const toggle = useSelector(selectToggle);
    return (
        <footer className={`${ toggle.isVisible ? styles.footer_container : styles.night}`}> 
            <h2>Footer :)</h2>
            <p>I'd like to use this section of the web app to put any final thoughts and possibly leave room for the footer.<br></br>
            Thank you to my friends, my family, and my love for supporting me throughout this journey. I have had a blast with what I have accomplished, and look forward to what can be done in the future. Happy coding!</p>
            <button onClick={() => window.scrollTo({top: 0, left:0, behavior:'smooth'})} className={styles.to_top}>Back to top</button>
        </footer>
    )
}

export default Footer;
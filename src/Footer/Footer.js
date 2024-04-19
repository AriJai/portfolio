import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer_container}> 
            <h1>Footer :)</h1>
            <p>I'd like to use this section of the web app to put any final thoughts and possibly leave room for the footer.<br></br>
            I'd like to use this part of the web app for closing thoughts and possible future projects.</p>
            <button onClick={() => window.scrollTo({top: 0, left:0, behavior:'smooth'})} className={styles.to_top}>Back to top</button>
        </footer>
    )
}

export default Footer;
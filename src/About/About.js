import React, { useState } from 'react';
import styles from './About.module.css';
import { AngleUpIcon, AngleDownIcon } from '../assets/icons';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => setIsExpanded(prevState => !prevState);

    return (
        <section className={`wrap ${styles.mainContainer}`} id="About">
            <div className={`content ${styles.aboutContainer}`} >
                <h2 className={`title `}>About</h2>
                <div id="me" className={styles.me}>
                    <p>I develop websites and web applications using JSX, HTML, and CSS.</p>
                    <p>This is a journey to learn of the ever-changing landscape of the Internet. I&apos;m excited to see what else is out there.</p>
                    <p>When I&apos;m away from the computer, you can probably find me outside in search of more coffee.</p>
                    <button className={styles.expandButton} onClick={handleExpand} >
                        {isExpanded ?
                            <div className={styles.icon} aria-label="Read less?">
                                <AngleUpIcon />
                            </div>
                            :
                            <div className={styles.icon} aria-label="Read more?">
                                <AngleDownIcon/>
                            </div>
                        }
                    </button>
                    <div className={`${styles.expanded} ${isExpanded ? styles.expandedShow : styles.expandedHide}`} id="expanded">
                        <p>Based in Los Angeles, I&apos;ve begun a career switch into programming after college in 2020.</p>
                        <p>Dedicated to my craft, I seek to build products that can stand tall and make a statement.</p>
                        <p>I&apos;m always willing to learn something new!</p>
                        <p>I enjoy the beach, the movie theater, and pizza.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
import React, { useState } from 'react';
import styles from './About.module.css';

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
                            <svg viewBox="0 0 24 24" aria-label="Read Less" className={styles.icon}>
                                <path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" />
                            </svg>
                            :
                            <svg viewBox="0 0 24 24" aria-label="Read more?" className={styles.icon}>
                                <path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" />
                            </svg>
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
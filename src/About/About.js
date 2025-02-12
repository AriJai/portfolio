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
                    <p>Hello there! It's nice to meet you&#44; I am Arian Jaihooni &#40; pronounced &#8220;Ah-rhi-on Jay-who-knee&#8221; &#41;&#44; and thank you for coming over to check out my portfolio!</p>
                    <p>I develop websites and web applications using JavaScript&#44; HTML&#44; and CSS&#46;</p>
                    <p></p>
                    <p>This is a journey to learn of the ever-changing landscape of the Internet&#46; I&apos;m excited to see what else is out there&#46;</p>
                    <p></p>
                    <p>When I&apos;m away from the computer&#44; you can probably find me outside in search of more coffee&#46;</p>
                    <button className={styles.expandButton} onClick={handleExpand} >
                        {isExpanded ?
                            <div className={styles.icon} aria-label="Read less?">
                                <AngleUpIcon />
                            </div>
                            :
                            <div className={styles.icon} aria-label="Read more?">
                                <AngleDownIcon />
                            </div>
                        }
                    </button>
                    <div className={`${styles.expanded} ${isExpanded ? styles.expandedShow : ""}`} id="expanded">
                        <p>
                            Based in Los Angeles&#44; I&apos;ve begun a career switch into programming after college in 2020&#46;<br></br>
                            Since then&#44; I have taken the time to learn about the many facets behind the web development process&#46;<br></br>
                            Dedicated to my craft&#44; I seek to build products that can stand tall and make a statement&#46;<br></br>
                            I&apos;m always going back to documentation, while working on projects and seeking new technologies&#46;<br></br>
                            I enjoy the beach&#44; going to the movies&#44; and pizza&#46;<br></br>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
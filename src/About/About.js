import React, {useState, useRef} from 'react';
import styles from './About.module.css';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const sectionRef = useRef(null);
    const handleExpand = (e) => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <section ref={sectionRef} className={`${styles.about_container} ${isExpanded ? styles.stretch : styles.collapse}`} id="About"> 
            <h2 className={styles.title}>About</h2>
            <div id = 'me' className={styles.me}>
                <p>I develop websites and web applications from scratch using JSX, HTML, and CSS.</p>
                <p>This is a journey to learn of the every changing landscape of the Internet. I'm excited to see what else is out there.</p>
                <p>When I'm away from the computer, you can probably find me outside in search of more coffee.</p>
                <button onClick={handleExpand} >{ isExpanded ? `Read less` : `Read more?` }</button>
                <div className={isExpanded? styles.expanded : styles.expandedremove} id='expanded'>
                    <p>Based in Los Angeles, I've begun a career switch into programming after college in 2020.</p>
                    <p>Dedicated to my craft, I seek to build products that can stand tall and make a statement.</p>
                    <p>Always willing to learn something new!</p>
                    <p>I enjoy the beach, the movie theater, and pizza.</p>
                </div>
            </div>
            
        </section>
    )
}

export default About;
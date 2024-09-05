import React from 'react';
import styles from './Hero.module.css';
import me from './Images/me_full.jpg'

const Hero = () => {

    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_statement}>
                <h2 className={styles.hero_statement1}>Hello! I'm Ari!</h2>
                <h3 className={styles.hero_statement2}>I'm a Frontend developer</h3>
                <p className={styles.hero_statement3}>I love to build visually pleasing websites that are clean and functionable.</p>
            </div>
            <img className={styles.photo} src={me} />
        </section>
    
    )
}

export default Hero;
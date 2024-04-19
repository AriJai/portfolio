import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {

    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_img}>
                <div className={styles.hero_statement}>
                    <h2 className={styles.hero_statement1}>Hello! I'm Ari!</h2>
                    <h3 className={styles.hero_statement2}>I'm a Web developer</h3>
                    <p className={styles.hero_statement3}>I love to build visually pleasing work that is clean and functionable.</p>
                </div>
                <div className={styles.photo}></div>
                <div className={styles.m}>Put things here</div>
            </div>
        </section>
    )
}

export default Hero;
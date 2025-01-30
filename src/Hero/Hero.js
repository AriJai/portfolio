import React from 'react';
import styles from './Hero.module.css';
import me from './Images/me_full.jpg';
import { LinkedInIcon, GithubIcon } from '../assets/icons';

const Hero = () =>
(
    <section className={`wrap ${styles.mainContainer}`}>
        
        <div className={`content ${styles.heroContainer}`}>
            <div className={styles.headlineContainer}>
                <h2 className={`title ${styles.headline}`}>Hello! I&apos;m Ari!</h2>
                <h3 className={styles.subHeadline}>I&apos;m a Frontend Developer</h3>
                <p className={styles.heroMessage}>I love to build visually pleasing websites that are clean and functional.</p>
            </div>
            <div className={`${styles.imageAndIconsContainer}`}>
                <img className={styles.heroPhoto} src={me} alt="Hello it's Arian, nice to meet you!" loading="eager"/>

                <div className={styles.socialMediaContainer}>
                    <a className={styles.anchorToSocialSite} href="http://www.linkedin.com/in/arian-jaihooni-5112b1279" target="_blank">
                        <LinkedInIcon id="LinkedIn" viewBox="0 0 24 24" className={styles.icon} aria-label="My LinkedIn profile" />
                        <span className={styles.nameOfSocialSite}>LinkedIn</span>
                    </a>
                    <a className={styles.anchorToSocialSite} href="https://github.com/AriJai" target="_blank">
                        <GithubIcon viewBox="0 0 24 24" className={styles.icon} aria-label="My Github profile" />
                        <span className={styles.nameOfSocialSite}>Github</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

)

export default Hero;
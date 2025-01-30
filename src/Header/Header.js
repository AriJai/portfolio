import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { hamburger, lightmode } from './HeaderSlice';
import { selectToggle, isDaytime } from './HeaderSlice';
import { MoonIcon, SunIcon } from '../assets/icons';

const Header = () => {
    const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);
    const [desiredScrollPosition, setDesiredScrollPosition] = useState(0);
    const [isLightmode, setIsLightmode] = useState(isDaytime())
    const dispatch = useDispatch();
    const toggle = useSelector(selectToggle);

    useEffect(() => {
        // Update data-theme attribute based on visibility
        document.body.setAttribute('data-theme', toggle.activeLightmode ? 'light' : 'dark');
    }, [toggle.activeLightmode]);

    // Sets light mode to dark mode
    const handleVisibility = () => {
        const newVisibility = !isLightmode;
        dispatch(lightmode(newVisibility));
        setIsLightmode(newVisibility);
    };

    // Activates hamburger icon, only appears when screen width fits mobile
    const toggleHamburger = () => {
        const newToggleState = !isHamburgerToggled;
        dispatch(hamburger(newToggleState));
        setIsHamburgerToggled(newToggleState);

        const scroll = window.scrollY;
        setDesiredScrollPosition(scroll);

        if (newToggleState) {
            document.body.classList.add('scrollbar-lock');
            document.body.style.overflow = "hidden";
            document.body.style.top = `${-scroll}px`;
            document.querySelector('html').style.scrollBehavior = "auto";
        } else {
            document.body.classList.remove('scrollbar-lock');
            document.body.style.overflow = "auto";
            document.body.style.top = "";
            window.scrollTo(0, desiredScrollPosition);
            document.querySelector('html').style.scrollBehavior = "smooth";
        }
    }




    return (
        <header className={`${styles.container}`} id='header_main_container' >
            <div className={`wrap`}>
                <div className={`content ${styles.headerContent}`}>

                    {
                        isLightmode ?
                            <div onClick={handleVisibility} className={styles.iconWrapper}>
                                <SunIcon className={styles.themeToggleIcon} aria-label="Light mode" id="sun" />
                            </div>
                            :
                            <div onClick={handleVisibility} className={styles.iconWrapper}>
                                <MoonIcon className={styles.themeToggleIcon} aria-label="Dark mode" id="moon" />
                            </div>
                    }

                    <h1 className={styles.fullName}>
                        <span className={styles.nameF}>Arian</span>
                        <span className={styles.nameL}>Jaihooni</span>
                    </h1>


                    <div className={`${styles.hamburger} ${toggle.activeHamburger ? styles.hamburgerIsActive : ""}`} id="ham" onClick={toggleHamburger} >
                        <div className={styles.lineTop}></div>
                        <div className={styles.lineMiddle}></div>
                        <div className={styles.lineBottom}></div>
                    </div>


                    <div className={`${styles.navigationSection} ${toggle.activeHamburger ? styles.navigationForMobile : ""}`} id="nav" >
                        <nav id="header">
                            <ul className={`${styles.navigationUnorderedList}`}>
                                <li className={styles.navigationListItemProjects}>
                                    <a href="#projects" onClick={toggle.activeHamburger ? toggleHamburger : null}>Projects</a>
                                </li>
                                <li className={styles.navigationListItemSkills}>
                                    <a href="#Skills" onClick={toggle.activeHamburger ? toggleHamburger : null}>Skills</a>
                                </li>
                                <li className={styles.navigationListItemAbout}>
                                    <a href="#About" onClick={toggle.activeHamburger ? toggleHamburger : null}>About</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={`${toggle.activeHamburger ? styles.hamburgerOverlay : ""}`} onClick={toggleHamburger}></div>
                </div>
            </div>
        </header>
    )
}

export default Header;
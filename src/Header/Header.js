import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleH, toggleV } from './HeaderSlice';
import { selectToggle, isDaytime } from './HeaderSlice';
import Sun from './Images/Sun.png'
import Moon from './Images/Moon.png';

const Header = () => {
    const [isToggle, setIsToggle] = useState(false);
    const [isScroll, setIsScroll] = useState(0);
    const [isVisible, setIsVisible] = useState(isDaytime())
    const dispatch = useDispatch();
    const toggle = useSelector(selectToggle);

    useEffect(() => {
        // Update data-theme attribute based on visibility
        document.body.setAttribute('data-theme', toggle.isVisible ? 'light' : 'dark');
    }, [toggle.isVisible]);

    const handleVisibility = () => {
        const newVisibility = !isVisible;
        dispatch(toggleV(newVisibility));
        setIsVisible(newVisibility);
    };


    const toggleHamburger = (e) => {
        const newToggleState = !isToggle;
        dispatch(toggleH(newToggleState));
        setIsToggle(newToggleState);

        const scroll = window.scrollY;
        setIsScroll(scroll);

        if (newToggleState) {
            document.body.classList.add('scrollbar-lock');
            document.body.style.overflow = "hidden";
            document.body.style.top = `${-scroll}px`;
            document.querySelector('html').style.scrollBehavior = "auto";
        } else {
            document.body.classList.remove('scrollbar-lock');
            document.body.style.overflow = "auto";
            document.body.style.top = '';
            window.scrollTo(0, isScroll);
            document.querySelector('html').style.scrollBehavior = "smooth";
        }
    }




    return (
        <header className={`${styles.header_main_container}`} id='header_main_container' >
            <div className={styles.title}>
                <h1 className={styles.namef}>Arian</h1>
                <h1 className={styles.namel}>Jaihooni</h1>
            </div>


            <div className={`${styles.hamburger} ${toggle.isToggle ? styles.active : ""}`} id="ham" onClick={(e) => toggleHamburger()} >
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>


            <div className={`${styles.nav} ${toggle.isToggle ? styles.nav_mobile : ""}`} id="nav" >
                <nav id='header'>
                    <ul className={`${styles.nav_ul}`}>
                        <li className={styles.nav_li_contact}>
                            <a href="#projects" onClick={toggle.isToggle ? () => toggleHamburger() : null}>Projects</a>
                        </li>
                        <li className={styles.nav_li_about}>
                            <a href="#Skills" onClick={toggle.isToggle ? () => toggleHamburger() : null}>Skills</a>
                        </li>
                        <li className={styles.nav_li_projects}>
                            <a href="#About" onClick={toggle.isToggle ? () => toggleHamburger() : null}>About</a>
                        </li>
                    </ul>


                </nav>
            </div>


            {
                isVisible ?
                    <div onClick={(e) => handleVisibility()} className={styles.wrapper}>
                        <img className={styles.visibility} src={Sun} aria-label="Light mode" id="sun" />
                    </div>
                    :
                    <div onClick={(e) => handleVisibility()} className={styles.wrapper}>
                        <img className={styles.visibility} src={Moon} aria-label="Dark mode" id="moon" />
                    </div>
            }
            <div className={`${toggle.isToggle ? styles.main_mobile : ""}`} onClick={(e) => toggleHamburger()}></div>

        </header>
    )
}

export default Header;
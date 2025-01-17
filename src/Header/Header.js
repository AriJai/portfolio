import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { hamburger, lightmode } from './HeaderSlice';
import { selectToggle, isDaytime } from './HeaderSlice';

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
                                <svg viewBox="0 0 24 24" className={styles.themeToggleIcon} aria-label="Light mode" id="sun">
                                    <path d="m23.5,11.5h-4.525c-.062-.865-.28-1.686-.629-2.436l3.961-2.19c.241-.134.329-.438.195-.68-.134-.242-.439-.327-.68-.195l-3.959,2.19c-.534-.818-1.232-1.517-2.05-2.05l2.189-3.96c.134-.242.046-.546-.196-.68-.242-.132-.546-.047-.679.195l-2.19,3.961c-.751-.349-1.571-.568-2.437-.629V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4.525c-.865.062-1.686.28-2.437.629l-2.19-3.961c-.133-.241-.436-.329-.679-.195-.242.134-.33.438-.196.68l2.189,3.96c-.818.534-1.517,1.232-2.05,2.05l-3.959-2.19c-.244-.132-.546-.047-.68.195s-.046.546.195.68l3.961,2.19c-.349.751-.568,1.571-.629,2.436H.5c-.276,0-.5.224-.5.5s.224.5.5.5h4.525c.062.865.28,1.686.629,2.436l-3.961,2.19c-.241.134-.329.438-.195.68.091.165.262.258.438.258.082,0,.165-.021.242-.062l3.959-2.19c.534.818,1.232,1.517,2.05,2.05l-2.189,3.96c-.134.242-.046.546.196.68.077.042.159.062.241.062.176,0,.347-.093.438-.258l2.19-3.961c.751.349,1.571.568,2.437.629v4.525c0,.276.224.5.5.5s.5-.224.5-.5v-4.525c.865-.062,1.686-.28,2.437-.629l2.19,3.961c.091.165.262.258.438.258.082,0,.165-.021.241-.062.242-.134.33-.438.196-.68l-2.189-3.96c.818-.534,1.516-1.232,2.05-2.05l3.959,2.19c.077.042.16.062.242.062.176,0,.347-.093.438-.258.134-.242.046-.546-.195-.68l-3.961-2.19c.349-.751.568-1.571.629-2.436h4.525c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-11.5,6.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z" />
                                </svg>
                            </div>
                            :
                            <div onClick={handleVisibility} className={styles.iconWrapper}>
                                <svg viewBox="0 0 24 24" className={styles.themeToggleIcon} aria-label="Dark mode" id="moon" >
                                    <path d="M12,12c0-3.146,1.446-5.925,4.421-8.494,.47-.405,.679-1.014,.562-1.628-.118-.614-.538-1.101-1.124-1.303C14.22,.01,12.008-.153,10.083,.152,4.827,.987,.613,5.432,.066,10.723c-.657,6.352,3.744,12.117,10.017,13.125,.656,.105,1.321,.15,1.999,.153,1.362,0,2.701-.204,3.777-.576,.585-.202,1.005-.689,1.124-1.303,.118-.614-.092-1.223-.562-1.628-2.975-2.569-4.421-5.347-4.421-8.494Zm3.533,10.479c-.975,.336-2.197,.521-3.453,.521-.62-.005-1.235-.043-1.839-.14C4.491,21.937,.458,16.65,1.061,10.826,1.562,5.978,5.423,1.904,10.24,1.14c.597-.095,1.223-.141,1.847-.141,1.23,0,2.456,.179,3.446,.521,.243,.084,.418,.288,.467,.546,.05,.259-.037,.514-.232,.683-3.208,2.77-4.768,5.796-4.768,9.25s1.56,6.48,4.768,9.25c.195,.169,.282,.424,.232,.683-.049,.258-.224,.462-.467,.546Z" /><circle cx="17" cy="15" r="1" /><circle cx="23" cy="19" r="1" /><path d="M23.658,8.974c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474l-1.263-.421-.421-1.263c-.136-.408-.812-.408-.948,0l-.419,1.257-1.256,.393c-.205,.064-.347,.252-.351,.468s.13,.409,.333,.48l1.27,.449,.423,1.269c.068,.204,.259,.342,.474,.342s.406-.138,.474-.342l.421-1.263,1.263-.421Z" />
                                </svg>
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
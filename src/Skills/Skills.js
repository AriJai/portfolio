import React, { useState, useEffect } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [movement, setMovement] = useState({ x: 0, y: 0 });
    const [isMove, setIsMove] = useState(false);

    const frontendSkills = ["JavaScript", "CSS", "React", "Redux", "HTML", "JSX", "Next.js", "Php", "Tailwind"];
    const backendSkills = ["PostgreSQL", "Express.js"];
    const languages = ["JavaScript", "Kotlin", "SQL"];
    const tools = ["Github", "Bash", "JSON/API", "Postman", "Docker", "Wordpress"];

    // Sets initial (x,y) coordinates when mouse enters box div
    useEffect(() => {
        const handleMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
        window.addEventListener('mousemove', handleMove);
        console.log(position);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    const mouseEnter = (e) => {
        e.target.style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        setMovement({ x: position.x, y: position.y });
        e.currentTarget.style.transform = `unset`;
        e.currentTarget.style.transform = `rotate3d(0,0,0, 0deg)`;

        setIsMove(!isMove);
    }

    const mouseLeave = (e) => {
        e.target.style.color = 'unset';
        e.currentTarget.style.transform = `unset`;
        setIsMove(false);
    }

    const mouseSlide = (e) => {
        const xRange = position.y - movement.y;
        const yRange = position.x - movement.x;

        if (isMove) {
            const xMovement = xRange === 0 ? 0 : xRange / 50;
            const yMovement = yRange === 0 ? 0 : yRange / 50;
            e.currentTarget.style.transform = `rotate3d(${-xMovement},${yMovement},0, ${Math.abs(xRange) + Math.abs(yRange)}deg)`;
        }
    };

    // Frames set for smaller screens
    const frame = (text, key) =>
    (
        <p className={styles.frame} key={`frame_${key}`}>{text}</p>
    )

    // Boxes set for larger screens
    const box = (text, key) =>
    (
        <div className={styles.box}
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseSlide} key={`box_${key}`}
        >
            <div id="box" className={`${styles.boxFace} ${styles.frontSide}`}>{text}</div>
            <div id="box" className={`${styles.boxFace} ${styles.backSide}`}></div>
            <div id="box" className={`${styles.boxFace} ${styles.leftSide}`}></div>
            <div id="box" className={`${styles.boxFace} ${styles.rightSide}`}></div>
            <div id="box" className={`${styles.boxFace} ${styles.topSide}`}></div>
            <div id="box" className={`${styles.boxFace} ${styles.bottomSide}`}></div>
        </div>
    )

    const skillsBox = () => {
        if (window.innerWidth < 1200) {
            return (
                <>
                    <h2>Frontend</h2>
                    <div className={styles.sections}>
                        {frontendSkills.map((skill, i) => frame(skill, i))}
                    </div>
                    <h2>Tools</h2>
                    <div className={styles.sections}>
                        {tools.map((skill, i) => frame(skill, i))}
                    </div>
                    <h2>languages</h2>
                    <div className={styles.sections}>
                        {languages.map((skill, i) => frame(skill, i))}
                    </div>
                    <h2>Backend</h2>
                    <div className={styles.sections}>
                        {backendSkills.map((skill, i) => frame(skill, i))}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h3>Front End</h3>
                    <div className={styles.sections}>
                        {frontendSkills.map((skill, i) => box(skill, i))}
                    </div>
                    <h3>Tools</h3>
                    <div className={styles.sections}>
                        {tools.map((skill, i) => box(skill, i))}
                    </div>
                    <h3>Languages</h3>
                    <div className={styles.sections}>
                        {languages.map((skill, i) => box(skill, i))}
                    </div>
                    <h3>Back End</h3>
                    <div className={styles.sections}>
                        {backendSkills.map((skill, i) => box(skill, i))}
                    </div>
                </>
            )
        }
    };



    return (
        <section className={`wrap ${styles.mainContainer}`} id="Skills">
            <div className={`content ${styles.skillsContainer}`}>
                <h2 className={`title `}>Skills</h2>
                <div className={styles.content}>
                    {skillsBox()}
                </div>
            </div>
        </section>
    )
}

export default Skills;
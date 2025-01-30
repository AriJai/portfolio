import React, { useState, useRef, useEffect } from 'react';
import styles from './Skills.module.css';

const SkillBox = ({ skill }) => {
    const [rotation, setRotation] = useState([]);
    const [color, setColor] = useState("");
    const [isMove, setIsMove] = useState(false);
    const divRef = useRef(null);

    const boxSize = 60;


    const mouseEnter = () => {
        setColor(`rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`);
        setIsMove(true);
    };

    const mouseLeave = () => {
        setColor(`var(--background-dark)`);
        setRotation('unset');
        setIsMove(false);
    };

    const mouseSlide = (event) => {
        // gather data for div width, height
        const rect = divRef.current.getBoundingClientRect();
        // set center point on div
        const centerX = Math.round(rect.left + rect.width / 2);
        const centerY = Math.round(rect.top + rect.height / 2);
        // gather data on mouse location
        const dx = Math.round(event.clientX - centerX);
        const dy = Math.round(centerY - event.clientY);
        // calculate respect x and y angle based on mouse location, refactor from rad to deg
        const angleX = Math.atan2(dy, boxSize) * 180 / Math.PI;
        const angleY = Math.atan2(dx, boxSize) * 180 / Math.PI;
        // set rotation value based on angle
        setRotation(`rotateX(${angleX}deg) rotateY(${angleY}deg)`);
    };


    return (
        <div
            ref={divRef}
            style={{ width: boxSize, height: boxSize, display: "grid", placeItems: "center" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseSlide}
        >
            <div

                className={styles.box}
                style={{ transform: rotation, color: color }}
            >
                <div id="box" className={`${styles.boxFace} ${styles.frontSide}`}

                >{skill}</div>
                <div className={`${styles.boxFace} ${styles.backSide}`}></div>
                <div className={`${styles.boxFace} ${styles.leftSide}`}></div>
                <div className={`${styles.boxFace} ${styles.rightSide}`}></div>
                <div className={`${styles.boxFace} ${styles.topSide}`}></div>
                <div className={`${styles.boxFace} ${styles.bottomSide}`}></div>
            </div>
        </div>
    );
};

export default SkillBox;

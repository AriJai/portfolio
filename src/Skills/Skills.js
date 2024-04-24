import React, {useState, useEffect}from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [movement, setMovement] = useState({mX: 0, mY: 0});
    const [isMove, setIsMove] = useState(false);

    const skills = [`JavaScript`,`CSS`,`React`,`Redux`,`HTML`,`Kotlin`,`SQL`,`JSX`,`Bash`,`Github`,`JSON/API`];
    
    useEffect(() => {
        const handleMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        } 
        window.addEventListener('mousemove', handleMove);
        console.log(position);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    const mouseEnter = (e) => {
        e.target.style.color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
        setMovement({ mX: position.x, mY: position.y });
        //e.target.style.transform = `translateZ(200px)`;
        e.currentTarget.style.transform= `rotate3d(0,0,0, 0deg)`;

        setIsMove(!isMove);
    }

    const mouseLeave = (e) => {
        e.target.style.color = 'unset';
        //e.currentTarget.style.transform = `unset`;
        setIsMove(false);
    }

    const mouseSlide = (e) => {
        let xRange = position.y - movement.mY;
        let yRange = position.x - movement.mX;
        let xMovement = 0;
        let yMovement = 0;

        if( isMove === true ){

            if( xRange < 0 ) {
                xMovement = xRange / 50;
            } else if (xRange > 0 ) {
                xMovement = xRange / 50;
            } else if ( xRange === 0) {
                xMovement = 0;
            }

            if( yRange < 0 ) {
                yMovement = yRange / 50;
            } else if (yRange > 0 ) {
                yMovement = yRange / 50;
            } else if ( yRange === 0) {
                yMovement = 0;
            }
    
            e.currentTarget.style.transform = `rotate3d(${-xMovement},${yMovement},0, ${Math.abs(xRange) + Math.abs(yRange)}deg)`;
        
        }
    };
    const frame = (text, key) => {
        return (
            <p className={styles.frame} onClick={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseSlide} key={`frame_${key}`}>{text}</p>
        )
    }

    const box = (text, key) => {
        return (
            <div className={styles.box}
                onClick={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseSlide} key={`box_${key}`} 
            >
                    <div className={`${styles.boxFace} ${styles.frontSide}`}>{text}</div>
                    <div className={`${styles.boxFace} ${styles.backSide}`}></div>
                    <div className={`${styles.boxFace} ${styles.leftSide}`}></div>
                    <div className={`${styles.boxFace} ${styles.rightSide}`}></div>
                    <div className={`${styles.boxFace} ${styles.topSide}`}></div>
                    <div className={`${styles.boxFace} ${styles.bottomSide}`}></div>
            </div>
        )
    };

    const skillsBox = () => {
        if (window.innerWidth < 1200) {
            return skills.map((skill,i) => frame(skill,i));
        } else {
            return skills.map((skill,i) => box(skill,i));
        }
    };

    

    return (
        <section className={styles.skills_container}> 
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>
                {skillsBox()}
            </div> 
        </section>
    )
}

export default Skills;
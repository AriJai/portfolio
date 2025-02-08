import React, { useState } from 'react';
import styles from './Projects.module.css';
import { ProjectApps } from './ProjectApps';

const Projects = () => {
    const [highLight, setHighLight] = useState(ProjectApps[0]);

    // Opens a new tab for the project.
    const handleClick = (link) => window.open(link, "_blank");


    const projectHighLight = (highLight = ProjectApps[0]) =>
    (
        <div className={styles.highlightContainer}>
            {
                highLight.highlightImg ?
                    <div className={styles.highlightThumbnailContainer}>
                        <img
                            className={styles.highlightThumbnail}
                            src={highLight.highlightImg}
                            onClick={() => handleClick(highLight.link)}
                            alt={highLight.highlightImg_aria}
                            loading="lazy">
                        </img>
                    </div> :
                    <div className={styles.highlightThumbnail}></div>
            }
            <h3 className={styles.highlightTitle}>{highLight.name}</h3>
            <p className={styles.highlightDescription}>{highLight.desc}</p>
        </div>
    )


    const projectFrame = (project, key) =>
    (
        <div className={styles.projectListGridContainer} key={`project_${key}`} onClick={() => setHighLight(ProjectApps[key])}>
            <div className={styles.projectListThumbnailContainer}>
                <img className={styles.projectListThumbnail} src={project.img} alt={project.img_aria}></img>
            </div>
            <h5 className={styles.projectName}>{project.name}</h5>
        </div>
    )


    const projectList = () =>
    (
        ProjectApps.map((project, i) => projectFrame(project, i))
    )

    return (
        <section className={`wrap ${styles.mainContainer}`} id="projects">
            <div className={`content ${styles.projectContainer}`}>
                <h2 className={`title `}>Projects</h2>
                <div className={styles.projectListContainer}>
                    {
                        projectHighLight(highLight)
                    }
                    <div class={`${styles.projectListItemContainer}`}>
                        {
                            projectList()
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;
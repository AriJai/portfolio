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
                    <img className={styles.highlightThumbnail} src={highLight.highlightImg} onClick={() => handleClick(highLight.link)} alt={highLight.highlightImg_aria}></img> :
                    <div className={styles.highlightThumbnail}></div>
            }
            <h3 className={styles.highlightTitle}>{highLight.name}</h3>
            <p className={styles.highlightDescription}>{highLight.desc}</p>
        </div>
    )


    const projectFrame = (project, key) =>
    (
        <div className={styles.projectListGridContainer} key={`project_${key}`} onClick={() => setHighLight(ProjectApps[key])}>
            <img className={styles.projectListThumbnail} src={project.img} alt={project.img_aria}></img>
            <h3 className={styles.projectName}>{project.name}</h3>
        </div>
    )


    const projectList = () =>
    (
        ProjectApps.map((project, i) => projectFrame(project, i))
    )

    return (
        <section className={styles.mainContainer} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                <div className={styles.projectListContainer}>
                    {
                        projectList()
                    }
                </div>
                {
                    projectHighLight(highLight)
                }
            </div>
        </section>
    )
};

export default Projects;
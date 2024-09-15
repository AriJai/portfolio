import React, { useState } from 'react';
import styles from './Projects.module.css';
import { ProjectApps } from './ProjectApps';
import { useSelector } from 'react-redux';
import { selectToggle } from '../Header/HeaderSlice';

const Projects = () => {
    const [highLight, setHighLight] = useState(ProjectApps[0]);
    const toggle = useSelector(selectToggle);

    // Opens a new tab for the project.
    const handleClick = (link) => window.open(link, "_blank");


    const projectHighLight = (highLight = ProjectApps[0]) =>
    (
        <div className={styles.projects_highlight}>
            {
                highLight.highlightImg ?
                    <img className={styles.highlight_screen} src={highLight.highlightImg} onClick={() => handleClick(highLight.link)} alt={highLight.highlightImg_aria}></img> :
                    <div className={styles.highlight_screen}></div>
            }
            <h3 className={styles.highlight_title}>{highLight.name}</h3>
            <p className={styles.project_preview}>{highLight.desc}</p>
        </div>
    )


    const projectFrame = (project, key) =>
    (
        <div className={styles.projects_grid_container} key={`project_${key}`} onClick={() => setHighLight(ProjectApps[key])}>
            <img className={styles.project_shell} src={project.img} alt={project.img_aria}></img>
            <div className={styles.project_desc}>
                <h3 className={styles.project_title}>{project.name}</h3>
            </div>
        </div>
    )


    const projectList = () =>
    (
        ProjectApps.map((project, i) => projectFrame(project, i))
    )

    return (
        <section className={`${toggle.isVisible ? styles.projects_container : styles.night}`} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects_screen}>
                <div className={styles.projects_flex_container}>
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
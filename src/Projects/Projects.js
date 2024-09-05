import React, {useState} from 'react';
import styles from './Projects.module.css';
import {ProjectApps} from './ProjectApps';
import { useSelector } from 'react-redux';
import { selectToggle } from '../Header/HeaderSlice';

const Projects = () => {
    //const projectNames = [`App1`,`App2`,`App3`,`App4`,`App5`];
    const [highLight, setHighLight] = useState(ProjectApps[0]);
    const toggle = useSelector(selectToggle);

    const handleClick = (link) => {
        window.open(link, '_blank');
    }


    const projectHighLight = (highLight = ProjectApps[0]) => {
        return (
            <div className={styles.projects_highlight} onClick={() => handleClick(highLight.link)}>
                <h3 className={styles.highlight_title}>{highLight.name}</h3>
                <img className={styles.highlight_screen} src={highLight.highlightImg}></img>
                <p className={styles.project_preview}>{highLight.desc}</p>
            </div>
        )
    };

    const projectFrame = (project,key) => {        
        return (
            <div  className={styles.projects_grid_container} key={`project_${key}`} onClick={() => setHighLight(ProjectApps[key])}>
                <img className={styles.project_shell} src={project.img}></img>
                <div className={styles.project_desc}>
                    <h3 className={styles.project_title}>{project.name}</h3>
                </div>
            </div>
        )
    };

    const projectList = () => {
        return (
            ProjectApps.map((project,i) => projectFrame(project,i))
        )
    };

    return (
        <section className={`${toggle.isVisible ? styles.projects_container : styles.night}`} id="projects"> 
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects_screen}>
                <div className={styles.projects_flex_container}>
                    {projectList()}
                </div>
                {projectHighLight(highLight)}
            </div>
        </section>
    )
};

export default Projects;
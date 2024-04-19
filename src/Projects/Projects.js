import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {

    const projectNames = [`App1`,`App2`,`App3`,`App4`,`App5`];

    const projectHighLight = () => {
        return (
            <div className={styles.projects_highlight}>
                <h2></h2>
                <div className={styles.project_preview}>

                </div>
            </div>
        )
    };

    const projectFrame = (name, key) => {        
        return (
            <div  className={styles.projects_grid_container} key={`project_${key}`}>
                <div className={styles.project_shell}></div>
                <h3 className={styles.project_title}>{name}</h3>
            </div>
        )
    };

    const projectList = () => {
        return (
            projectNames.map((project,i) => projectFrame(project,i))
        )
    };

    return (
        <section className={styles.projects_container}> 
            <h2 className={styles.title}>Projects</h2>
            <p>A list of my projects can be found here!</p>
            <div className={styles.projects_screen}>
                <div className={styles.projects_flex_container}>
                    {projectList()}
                </div>
                {projectHighLight()}
            </div>
        </section>
    )
};

export default Projects;
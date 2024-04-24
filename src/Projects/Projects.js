import React, {useState} from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const projectNames = [`App1`,`App2`,`App3`,`App4`,`App5`];
    const [highLight, setHighLight] = useState(projectNames[0]);

    const projectHighLight = (highLight) => {
        return (
            <div className={styles.projects_highlight}>
                <h3 className={styles.highlight_title}>{highLight}</h3>
                <div className={styles.highlight_screen}></div>
                <div className={styles.project_preview}>A more in-depth description for the project. This will give a basic idea behind the function of the web app as well as why it was designed in the first place.</div>
            </div>
        )
    };

    const projectFrame = (name, key) => {        
        return (
            <div  className={styles.projects_grid_container} key={`project_${key}`} onClick={() => setHighLight(projectNames[key])}>
                <div className={styles.project_shell}></div>
                <div className={styles.project_desc}>                
                    <h3 className={styles.project_title}>{name}</h3>
                </div>
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
import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styles.container} ${s.projectsContainer}`}>
                <span className={s.subtitle}>CHECK MY PROJECTS AND KEEP YOUR FEEDBACK</span>
                <h3 className={s.title}>Projects</h3>
                <div className={s.projects}>
                    <Project title={"Social Network"} description={" a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1, kind People of every description were there. description."}/>
                    <Project title={"Todo list"} description={" a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1, kind People of every description were there. description."}/>
                    <Project title={"Cards"} description={' a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1, kind People of every description were there. description.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;





import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styles.container} ${s.projectsContainer}`}>
                <h3 className={s.title}>Projects</h3>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
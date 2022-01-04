import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title";
import SubTitle from "../common/components/SubTitle";
import {Fade} from "react-awesome-reveal";


const Projects = () => {

    let projects = [
        {
            title: "Social Network",
            icon: "https://i.pinimg.com/564x/11/84/57/11845746c07479ddb280cb7ad57050e5.jpg",
            description: "a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1,"
        },
        {
            title: "Todo list",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2AqMx1yrjS9cI_Cv82K91hsbNhJUFPSPog&usqp=CAU",
            description: "a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1,"
        },
        {
            title: "Cards",
            icon: "http://www.bravercardgame.com/img/icon-qucards-crave.png",
            description: "a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1,"
        },
        {
            title: "Films",
            icon: "https://i.pinimg.com/564x/11/84/57/11845746c07479ddb280cb7ad57050e5.jpg",
            description: "a written or spoken statement about something that enables a reader or listener to picture it I recognized the place from your description of it. 2 : sort entry 1 sense 1,"
        },
    ];


    return (
        <div className={s.projectsBlock} id={'projects'}>
            <Fade>
                <div className={`${styles.container} ${s.projectsContainer}`}>
                    <SubTitle subTitle="Check my projects and keep your feedback"/>
                    <Title title="Projects"/>
                    <div className={s.projects}>
                        {projects.map(({title, icon, description}) => {
                            return <Project
                                title={title}
                                icon={icon}
                                description={description}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;





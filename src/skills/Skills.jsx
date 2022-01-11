import React from 'react';
import s from './Skills.module.css'
import styles from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import SubTitle from "../common/components/SubTitle";
import {Fade} from "react-awesome-reveal";
import redux from "../common/assets/redux.png"
import git from "../common/assets/git.png"
import html from "../common/assets/html.png"
import jest from "../common/assets/jest.png"
import react from "../common/assets/react.png"
import sass from "../common/assets/sass.png"
import typescript from "../common/assets/typescript.png"
import javascript from "../common/assets/javascript.png"


const Skills = () => {

    const skills = [
        {
            title: 'HTML',
            icon: html,

        },
        {
            title: 'JS',
            icon: javascript,

        },
        {
            title: 'React',
            icon: react,

        },
        {
            title: 'GIT',
            icon: git,

        },
        {
            title: 'CSS',
            icon: sass,
        },
        {
            title: 'Redux',
            icon: redux,
        },
        {
            title: 'TS',
            icon: typescript,
        },
        {
            title: 'Jest',
            icon: jest,
        },
    ]

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <Fade>
                <div className={`${styles.container} ${s.skillsContainer}`}>
                    <SubTitle subTitle='Features'/>
                    <Title title='Skills'/>
                    <div className={s.skills}>
                        {skills.map(({title, icon}) => {
                            return <Skill key={title} title={title}
                                          icon={icon}
                            />
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;

import React from 'react';
import s from './Skills.module.css'
import styles from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import SubTitle from "../common/components/SubTitle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";


const Skills = () => {

    const skills = [
        {
            title: 'HTML',
            icon: faHtml5,
            description: 'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'
        },
        {
            title: 'JS',
            icon: faJsSquare,
            description: 'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'
        },
        {
            title: 'React',
            icon: faReact,
            description: 'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'
        },
        {
            title: 'GIT',
            icon: faGitAlt,
            description: 'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'
        },
        {
            title: 'CSS',
            icon: faCss3,
            description: 'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'
        },
    ]

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${styles.container} ${s.skillsContainer}`}>
                <SubTitle subTitle='Features'/>
                <Title title='Skills'/>
                <div className={s.skills}>
                    {skills.map(({title, icon, description}) => {
                        return <Skill key={title} title={title}
                                      icon={<FontAwesomeIcon icon={icon} size='4x'/>}
                                      description={description}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import s from './Skills.module.css'
import styles from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styles.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML/CSS"}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people. Jeffrey can be used for many purposes start'}/>
                    <Skill title={"JS"}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people. Jeffrey can be used for many purposes start'}/>
                    <Skill title={'React'}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people. Jeffrey can be used for many purposes start'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
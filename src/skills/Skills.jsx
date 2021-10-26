import React from 'react';
import s from './Skills.module.css'
import styles from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import SubTitle from "../common/components/SubTitle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styles.container} ${s.skillsContainer}`}>
                <SubTitle subTitle='Features'/>
                <Title title='Skills'/>
                <div className={s.skills}>
                    <Skill title={'HTML'}
                           icon={<FontAwesomeIcon icon={faHtml5}  size='4x' />}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'}/>
                    <Skill title={'JS'}
                           icon={<FontAwesomeIcon icon={faJsSquare} size='4x'/>}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'}/>
                    <Skill title={'React'}
                           icon={<FontAwesomeIcon icon={faReact} size='4x' spin/>}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'}/>
                    <Skill title={'GIT'}
                           icon={<FontAwesomeIcon icon={faGitAlt} size='4x' />}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'}/>
                    <Skill title={'CSS'}
                           icon={<FontAwesomeIcon icon={faCss3} size='4x'/>}
                           description={'Jeffrey is a Responsive Minimal Personal Portfolio Template for creative people.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
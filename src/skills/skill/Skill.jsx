import React from 'react';
import s from './Skill.module.css'

const Skill = ({title,icon}) => {
    return (
        <div className={s.skill}>
            <img src={icon}  className={s.icon} alt="icon"/>
            <h3>{title}</h3>
        </div>
    );
};

export default Skill;
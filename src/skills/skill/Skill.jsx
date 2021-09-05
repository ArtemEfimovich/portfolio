import React from 'react';
import s from './Skill.module.css'

const Skill = ({title,icon,description,}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>{icon}</div>
            <h3>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    );
};

export default Skill;
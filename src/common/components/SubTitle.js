import React from 'react';
import s from './SubTitle.module.css'

const SubTitle = ({style,subTitle}) => {
    return (
        <div>
            <span style={style} className={s.subtitle}>{subTitle}</span>
        </div>
    );
};

export default SubTitle;
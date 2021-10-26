import React from 'react';
import s from './Title.module.css'

const Title = ({title,style}) => {
    return (
        <div>
            <h2 style={style} className={s.title}>{title}</h2>
        </div>
    );
};

export default Title;
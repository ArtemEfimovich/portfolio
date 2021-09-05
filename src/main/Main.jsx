import React from 'react';
import s from './Main.module.css'
import style from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={style.container}>
                <div className={s.preview}>
                    <span>Hi there</span>
                    <h1>I am Artem Efimovich</h1>
                    <p>Web developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
};

export default Main;
import React from 'react';
import s from './Main.module.css'
import style from '../common/styles/Container.module.css'
import photo from '../common/assets/photo.png'


const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={style.container}>
                <div className={s.preview}>
                    <span className={s.name}>Hi there</span>
                    <h1 className={s.name}>I am Artem Efimovich</h1>
                    <p className={s.paragraph}>WEB DEVELOPER</p>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt="photo"/>
                </div>
            </div>

        </div>
    );
};

export default Main;
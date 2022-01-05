import React from 'react';
import s from './Main.module.css'
import style from '../common/styles/Container.module.scss'
import avatar from '../common/assets/photo.png'
import Particles from "react-tsparticles";
import ReactTypingEffect from 'react-typing-effect';
import Tilty from 'react-tilty';

const particlesOptions = {
    background: {
        color: {
            value: "#212428",
        },
    },
    fullScreen: {enable: false},
    particles: {
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.6,
            width: 0.8,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
        },
    },
    detectRetina: true,
}


const Main = () => {
    return (
        <div className={s.mainContainer} id={'main'}>
            <Particles className={s.particles} options={particlesOptions}/>
            <div className={style.container}>
                <div className={s.preview}>
                    <span className={s.name}>Hi there</span>
                    <h1 className={s.name}>I am Artem Efimovich</h1>
                    <p className={s.paragraph}><ReactTypingEffect
                        text={"FRONT-END DEVELOPER"}
                    /></p>
                </div>
                <div className={s.photo}>
                    <Tilty scale={1.1}>
                        <img src={avatar} alt="avatar"/>
                    </Tilty>
                </div>
            </div>
        </div>
    );
};

export default Main;
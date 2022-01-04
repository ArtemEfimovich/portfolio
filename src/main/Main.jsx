import React from 'react';
import s from './Main.module.css'
import style from '../common/styles/Container.module.css'
import avatar from '../common/assets/photo.png'
import Particles from "react-tsparticles";


const particlesOptions = {
    background: {
        color: {
            value: "#212428",
        },
    },
    fpsLimit: 60,
    fullScreen: { enable: false },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 150,
                duration: 2,
                opacity: 0.3,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 70,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 7,
        },
    },
    detectRetina: true,
}


const Main = () => {
    return (
        <div className={s.mainContainer} id={'main'}>
            <div className={s.particlesContainer}>
                <Particles  className={s.particles} options={particlesOptions}/>
            </div>
            <div className={style.container}>
                <div className={s.preview}>
                    <span className={s.name}>Hi there</span>
                    <h1 className={s.name}>I am Artem Efimovich</h1>
                    <p className={s.paragraph}>WEB DEVELOPER</p>
                </div>
                <div className={s.photo}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};

export default Main;
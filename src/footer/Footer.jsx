import React from 'react';
import s from './Footer.module.css'
import styles from '../common/styles/Container.module.css'
import {faFacebook, faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className={`${s.footerBlock} `}>
            <div className={`${s.container} ${styles.container}`}>
                <h2 className={s.title}>Efimovich Artem</h2>
                <div className={s.icons}>
                    <div className={s.icon}><FontAwesomeIcon icon={faLinkedin} size='2x' /></div>
                    <div className={s.icon}><FontAwesomeIcon icon={faTelegram} size='2x' /></div>
                    <div className={s.icon}><FontAwesomeIcon icon={faGithub} size='2x' /></div>
                    <div className={s.icon}><FontAwesomeIcon icon={faFacebook} size='2x' /></div>
                </div>
                <h4 className={s.title}>© 2021 All rights reserved</h4>
            </div>
        </div>
    );
};

export default Footer;
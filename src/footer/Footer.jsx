import React from 'react';
import s from './Footer.module.scss'
import styles from '../common/styles/Container.module.scss'
import {faFacebook, faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Fade} from "react-awesome-reveal";


const Footer = () => {

    const icons = [
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/artem-efimovich-2a5730141/",
        },
        {
            icon: faTelegram,
            link: 'https://t.me/ArtemEfimovich',
        },
        {
            icon: faGithub,
            link: 'https://github.com/ArtemEfimovich',
        },
        {
            icon: faFacebook,
            link: 'https://www.facebook.com/artemfender',
        },
    ]

    return (
        <div className={s.wrapper}>
            <Fade>
                <div className={`${s.footerBlock} `}>
                    <div className={`${s.container} ${styles.container}`}>
                        <h2 className={s.title}>Efimovich Artem</h2>
                        <div className={s.icons}>
                            {icons.map(({icon, link}) => {
                                return <a key={icon}
                                          href={link}
                                          className={s.icon}
                                          target="_blank"
                                ><FontAwesomeIcon icon={icon}
                                                  size='2x'/></a>
                            })}
                        </div>
                        <h4 className={s.title}>© 2022 All rights reserved</h4>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;

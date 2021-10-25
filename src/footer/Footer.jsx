import React from 'react';
import s from './Footer.module.css'
import styles from '../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={`${s.footerBlock} `}>
            <div className={`${s.container} ${styles.container}`}>
                <h2>Efimovich Artem</h2>
                <div className={s.icons}>
                    <div className={s.icon}>icon</div>
                    <div className={s.icon}>icon</div>
                    <div className={s.icon}>icon</div>
                    <div className={s.icon}>icon</div>
                </div>
                <h4>© 2021 All rights reserved</h4>
            </div>
        </div>
    );
};

export default Footer;
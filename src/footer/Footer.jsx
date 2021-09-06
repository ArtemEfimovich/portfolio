import React from 'react';
import s from './Footer.module.css'
import styles from '../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={`${s.footerBlock} ${styles.container}`}>
            <div className={s.container}>
                <h4>Efimovich Artem</h4>
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
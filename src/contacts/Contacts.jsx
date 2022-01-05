import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";


const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <Fade>
                <div className={`${s.contactsContainer} ${styles.container}`}>
                    <span className={s.subtitle}>Contact</span>
                    <h2 className={s.title}> Contact With Me</h2>
                    <form className={s.form}>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <textarea placeholder="Message"/>
                        <button type="submit" className={styles.button}> Send</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;
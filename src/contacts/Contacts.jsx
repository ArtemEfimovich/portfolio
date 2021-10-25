import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styles.container}`}>
                    <h2 className={s.title}> Contacts</h2>
                <form action="" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type="submit" className={s.button}> Send</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;
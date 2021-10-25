import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.css'



const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styles.container}`}>
                    <h2 className={s.title}> Contacts</h2>
                <form className={s.form}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"/>
                    <button type="submit" className={styles.button}> Send</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;
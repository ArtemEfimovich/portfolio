import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styles.container} ${s.contactsContainer}`}>
                    <div className={s.title}> Contacts</div>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={s.button}> Send</button>
            </div>
        </div>
    );
};

export default Contacts;
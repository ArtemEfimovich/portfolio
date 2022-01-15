import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";
import {useForm} from "react-hook-form";
import {sendEmail} from "../dal/sendEmail";


const Contacts = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();


    const onSubmit = async (data) => {
         await sendEmail(data)
        reset()
    }


    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <Fade>
                <div className={`${s.contactsContainer} ${styles.container}`}>
                    <span className={s.subtitle}>Contact</span>
                    <h2 className={s.title}> Contact With Me</h2>
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Name" {...register("name", {required: true})}/>
                        {errors.name && <span className={s.error}>This field is required</span>}
                        <input placeholder="Email" {...register("email", {
                            required: true, pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            }
                        })}/>
                        {errors.email?.message && <span className={s.error}>{errors.email?.message}</span>}
                        <textarea placeholder="Message" {...register("message", {required: true})}/>
                        {errors.message && <span className={s.error}>This field is required</span>}
                        <button type="submit" className={styles.button}> Send</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;

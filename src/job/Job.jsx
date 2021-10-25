import React from 'react';
import s from './Job.module.css'
import styles from '../common/styles/Container.module.css'

const Job = () => {
    return (
        <div className={s.jobBlock}>
            <div className={`${styles.container} ${s.jobsContainer}`}>
                <h2 className={s.title}>Considering options for remote work</h2>
               <div>
                   <button className={s.button}>Hire me</button>
               </div>

            </div>

        </div>
    );
};

export default Job;
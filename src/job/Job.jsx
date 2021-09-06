import React from 'react';
import s from './Job.module.css'
import styles from '../common/styles/Container.module.css'

const Job = () => {
    return (
        <div className={s.jobBlock}>
            <div className={`${styles.container} ${s.jobsContainer}`}>
                <div className={s.title}>Considering options for remote work</div>
                <button>
                    Hire me
                </button>
            </div>

        </div>
    );
};

export default Job;
import React from 'react';
import s from './Job.module.css'
import styles from '../common/styles/Container.module.scss'
import SubTitle from "../common/components/SubTitle";
import Title from "../common/components/Title";
import {Fade} from "react-awesome-reveal";

const Job = () => {
    return (
        <div className={s.jobBlock}>
            <Fade>
                <div className={`${styles.container} ${s.jobsContainer}`}>
                    <SubTitle subTitle="Hiring"/>
                    <Title style={{fontSize: "30px"}} title="Considering options for remote work"/>
                    <div className={s.linkWrapper}>
                            <a
                                className={styles.button}
                                href="https://www.linkedin.com/in/artem-efimovich-2a5730141/"
                                target="_blank"
                                rel="noreferrer"
                            > Hire me</a>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default Job;
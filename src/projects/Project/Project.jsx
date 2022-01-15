import React from 'react';
import s from "./Project.module.scss";
import SubTitle from "../../common/components/SubTitle";

const Project = ({icon, title, description, link}) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer}>
                <a className={s.link} href={link} target="_blank"  rel="noreferrer">view</a>
                <img className={s.image} src={icon} alt="icon"/>
            </div>
            <SubTitle style={{padding: "20px 0"}} subTitle={title}/>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;
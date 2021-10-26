import React from 'react';
import s from "./Project.module.css";
import SubTitle from "../../common/components/SubTitle";

const
    Project = ({icon,title,description}) => {
    return (
        <div className={s.project}>
           <div className={s.image}>
               <img src={icon} alt="icon"/>
           </div>
            <SubTitle style={{padding:"20px 0"}} subTitle={title}/>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;
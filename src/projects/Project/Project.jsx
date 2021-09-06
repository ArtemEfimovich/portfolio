import React from 'react';
import s from "./Project.module.css";

const Project = ({icon,title,description}) => {
    return (
        <div className={s.project}>
           <div className={s.image}>
               <button>View</button>
           </div>
            <h4>Project name</h4>
            <span className={s.description}>Short description</span>
        </div>
    );
};

export default Project;
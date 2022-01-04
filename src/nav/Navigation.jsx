import React from 'react';
import s from './Navigation.module.css'
import {Link} from "react-scroll/modules";



const Navigation = () => {
    return (
        <div className={s.nav}>
            <Link spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  to="main"
                  style={{cursor: "pointer"}}>Home</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  to="skills"
                  style={{cursor: "pointer"}}>Skills</Link>
            <Link spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  to="projects"
                  style={{cursor:"pointer"}}>Projects</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="contacts"
                  style={{cursor:"pointer"}}>Contacts</Link>
        </div>
    );
};

export default Navigation;
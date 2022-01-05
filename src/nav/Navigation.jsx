import React from 'react';
import s from './Navigation.module.scss'
import {Link} from "react-scroll/modules";



const Navigation = () => {
    return (
        <div className={s.nav}>
            <Link spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  to="main"
                  style={{color:"#ff014f"}}>Home</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  to="skills"
                 >Skills</Link>
            <Link spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  to="projects"
                >Projects</Link>
            <Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="contacts"
                  >Contacts</Link>
        </div>
    );
};

export default Navigation;
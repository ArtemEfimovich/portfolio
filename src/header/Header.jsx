import React from 'react';
import s from "./Header.module.scss"
import Navigation from "../nav/Navigation";

const Header = () => {
    return (
        <div className={s.header}>
            <Navigation/>
        </div>
    );
};

export default Header;
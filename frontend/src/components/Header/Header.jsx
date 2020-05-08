import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import logo from './stud.png'

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} alt={"logo"} />
        <span>OTUS WEB COURSES</span>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <a href="#" onClick={props.logout}>Log out</a> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
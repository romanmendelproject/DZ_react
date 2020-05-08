import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/courses" activeClassName={s.activeLink}>All Courses</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/mycourses" activeClassName={s.activeLink}>My Courses</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
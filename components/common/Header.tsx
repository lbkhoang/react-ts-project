import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    //make curent active link orange
    const activeLink = {color : "orange"}
    return (
        <nav>
            <NavLink activeStyle={activeLink} exact to="/">
                Home
            </NavLink> {" | "}
            <NavLink activeStyle={activeLink} to="/users">
                Users
            </NavLink> {" | "}
            <NavLink activeStyle={activeLink} to="/about">
                About
            </NavLink>
        </nav>
    )
}

export default Header;
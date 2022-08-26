import React from "react";
import "./Navbar.css";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <main className="navbar">
            <aside><Link to="/">Goals</Link></aside>
            <ul className="navbar__ul">
                <li className="navbar__li">
                    <Link to="/register"><FaUser />Register</Link>
                </li>
                <li className="navbar__li">
                    <Link to="/login"><FaSignInAlt />Login</Link>
                </li>
            </ul>
        </main>
    );
};




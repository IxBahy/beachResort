import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { arrayLinks } from '../data/navbar'
export const Navbar = () => {
    const [links, setLinks] = useState(arrayLinks);
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="navbar">
            <div className="nav-center" >
                <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    {/* nav-logo */}
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={handleToggle}
                    >
                        <FaAlignRight className="nav-icon" />
                    </button>
                    {/* nav-button */}
                </div>
                {/* nav-header */}
                <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                    {links.map((link) => {
                        const { path, name } = link
                        return < li >
                            <Link to={path}>{name}</Link>
                        </li>
                    })}
                </ul>
                {/* links */}
            </div>
            {/* nav-center */}
        </nav >
    )
}

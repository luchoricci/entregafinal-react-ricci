import React from "react";

import { Outlet,Link } from "react-router-dom";

const Layout = ({logo, cartwidget}) => {
    return (
        
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor ="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Store">Store</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/About us">About us</Link></li>
                <li><Link to="/contactus">Contact us</Link></li>
                <li><a href="#">{cartwidget}</a></li>
                </ul>
            </nav>
            <Outlet/>
        </header>
    )
}

export default Layout;
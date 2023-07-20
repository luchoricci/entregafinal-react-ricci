import React from "react";
import './styles.css';


const Header = ({logo, cartwidget}) => {
    return (
        
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor ="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                <li><a href="#" >Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">{cartwidget}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
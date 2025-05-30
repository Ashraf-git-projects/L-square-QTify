import React from "react";
import "./Navbar.css";
import logo from "../Assets/qtify_logo.png";
import { FaSearch } from "react-icons/fa"; 

function Navbar(){
    return(
        <nav className="navbar" >
            <img src={logo} alt="qtify-logo" className="logo"/>
            <div className="searchContainer">
            <input type="text" placeholder="Search a song of your choice" className="search-bar" />
            <button className="search-icon-btn"><FaSearch /></button>
            </div>
            <button className="feedback-btn" >Give feedback</button>
        </nav>
    );
}
export default Navbar
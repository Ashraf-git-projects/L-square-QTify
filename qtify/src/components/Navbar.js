import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/qtify_logo.png";
import { FaSearch } from "react-icons/fa";

function Navbar({ data = [] , onFeedbackClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar">
      <img src={logo} alt="qtify-logo" className="logo" />
      <div className="searchContainer">
        <input
          type="text"
          aria-label="Search"
          placeholder="Search a song of your choice"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-icon-btn"><FaSearch /></button>

        {searchTerm && filteredResults.length > 0 && (
          <div className="search-dropdown">
            {filteredResults.map((item, index) => (
              <div className="search-result-item" key={index}>
                <img src={item.image} alt={item.title} className="result-thumb" />
                <span className="result-title">{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
     <button className="feedback-btn" onClick={onFeedbackClick}>
       Give Feedback
      </button>
    </nav>
  );
}

export default Navbar;

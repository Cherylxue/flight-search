import React from "react";
import flightSearchHeader from "./flight-search-header.jpg";
import "./Header.css";

function Header() {
  return (
    <div id="header-container">
      <img id="header" src={flightSearchHeader} alt=""></img>
      <h3 id="header-text">Flight Search</h3>
      <h4 id="header-slogan">Find your cheapest flight quote</h4>
    </div>
  );
}

export default Header;

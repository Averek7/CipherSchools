import React from "react";
import "./Navbar.css";
import logo from "../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png";
import { BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="leftnav-container">
        <div className="logocontainer">
          <div className="burger">
            <GiHamburgerMenu />
          </div>
          <img src={logo} alt="" width="35px" height="35px" />
          <span>CipherSchools</span>
        </div>
        <div className="browse-container">Browse</div>
      </div>
      <div className="rightnav-container">
        <div className="search-container"></div>
        <div className="notifiy-drop">
          <BsBell />
        </div>
        <div className="profile-drop"></div>
        <div className="coin-drop"></div>
        <div className="toggle-container">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

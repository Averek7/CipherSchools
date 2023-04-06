import React from "react";
import "./Dashboard.css";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import CipherMap from "../CipherMap/CipherMap";
import Web from "../Web/Web";
import Professional from "../Professional/Professional";
function Dashboard() {
  return (
    <div className="component">
      <Navbar />
      <Header />
      <About />
      <CipherMap />
      <Web />
      <Professional/>
    </div>
  );
}

export default Dashboard;

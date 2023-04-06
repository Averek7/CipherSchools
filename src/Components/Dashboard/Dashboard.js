import React from "react";
import "./Dashboard.css";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import CipherMap from "../CipherMap/CipherMap";
function Dashboard() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <CipherMap />
    </>
  );
}

export default Dashboard;

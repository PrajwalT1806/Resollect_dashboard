import React from "react";
import Sidebar from "./Sidebar";
import Portfolio from "./Portfolio";
import "./styles.css"; // Ensure this file exists
import { FaUser, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <img
          src="/resollect image.png"
          alt="Resollect Logo"
          className="navbar-logo"
        />
        <div className="navbar-icons">
          <FaEnvelope className="icon" />
          <h4> prajwal.ei21@bmsce.ac.in</h4>
          <FaUser className="icon" />
        </div>
      </div>

      <div className="container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="content-wrapper">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;

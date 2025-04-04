import React from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Resollect Logo" className="logo" />
      </div>

      <ul className="sidebar-menu">
        <li>📌 Dashboard</li>
        <li className="active">📂 Portfolio</li>
        <li>🔔 Notifications</li>
        <li>📜 Notices</li>
        <li>🏦 Auction</li>
        <li>📤 Data Upload</li>
        <li>⚙️ Control Panel</li>
        <li>👥 User Management</li>
        <li>🔑 Permissions</li>
      </ul>

      {/* Powered By Section */}
      <div className="powered-by">
        <span>Powered by</span>
        <img
          src="/resollect image.png"
          alt="Powered By Logo"
          className="powered-logo"
        />
      </div>
    </div>
  );
};

export default Sidebar;

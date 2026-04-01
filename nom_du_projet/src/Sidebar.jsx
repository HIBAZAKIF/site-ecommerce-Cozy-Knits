import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "220px" }}>
      <h4 className="text-center mb-4">Admin Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link text-white">🏠 Tableau de bord</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/dashboard/ajouter" className="nav-link text-white">➕ Ajouter Article</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/dashboard/gestion" className="nav-link text-white">⚙️ Gérer Articles</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Menu";
import ListeArticles from "./ListeArticles";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
    // - loggedIn: boolean qui indique si l'utilisateur est connecté
  const [loggedIn, setLoggedIn] = useState(false);
  const [articles, setArticles] = useState([
    { id: 1, nomA: "Bureaux en bois massif", pu:2000 ,image: "BUREAU-massif.webp" },
    { id: 2, nomA: "cahier A4 96 pages",pu:30 , image: "cahiers.jpg" },
    { id: 3, nomA: "Hirsrian Lot de 12 stylos", pu:50 , image: "stylo.jpg" },
  ]);



  const DashboardRoute = () => {
  // - Si l'utilisateur n'est PAS connecté (!loggedIn) : affiche la page de login
  // - Si l'utilisateur EST connecté : affiche le dashboard
    if (!loggedIn) {
    return <Login onLogin={setLoggedIn} />;
  } else {
    return <Dashboard articles={articles} setArticles={setArticles} />;
  }
  };

  return (
    <Router>
   {/* Menu : Navigation principale, visible sur toutes les pages */}
      <Menu />

      <Routes>
        <Route path="/" element={<ListeArticles articles={articles} />} />
          {/* Route pour la page contact - version simplifiée inline */}
        <Route path="/contact" element={<div className="container mt-4">
            <h2>📞 Contactez-nous</h2><p>email: contact@monsite.com</p></div>} />
           {/* Le * permet d'avoir des sous-routes dans le dashboard */}
           {/* Appelle la fonction DashboardRoute pour vérifier si l’utilisateur est connecté */}
        <Route path="/dashboard/*" element={<DashboardRoute />} />
          {/* Route "attrape-tout" : redirige vers la page d'accueil pour les URLs inconnues */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
        {/* Footer : Pied de page visible sur toutes les pages */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        © 2025 MonSite
      </footer>

    </Router>
  );
}

export default App;

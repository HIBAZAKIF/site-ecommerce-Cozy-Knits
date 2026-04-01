import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import AjouterArticle from "./AjouterArticle";
import GestionArticles from "./GestionArticles";

function Dashboard({ articles, setArticles }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<GestionArticles articles={articles} setArticles={setArticles} />} />
          <Route path="ajouter" element={<AjouterArticle articles={articles} setArticles={setArticles} />} />
          <Route path="gestion" element={<GestionArticles articles={articles} setArticles={setArticles} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;

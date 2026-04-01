import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("liste");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [currentProduit, setCurrentProduit] = useState({
    id: "", nom: "", prix: "", image: "", description: "",
    taille: [""], couleur: [""], stock: "", categorie: ""
  });

  const fetchData = async () => {
    try {
      const endpoint = activeTab === "liste" ? "commandes" : "produits";
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
      setData(response.data);
    } catch (error) { console.error(error); }
  };

  useEffect(() => { fetchData(); }, [activeTab]);

  const handleDynamicChange = (index, value, type) => {
    const updatedArray = [...currentProduit[type]];
    updatedArray[index] = value;
    setCurrentProduit({ ...currentProduit, [type]: updatedArray });
  };

  const addField = (type) => {
    setCurrentProduit({ ...currentProduit, [type]: [...currentProduit[type], ""] });
  };

  const removeField = (index, type) => {
    const updatedArray = currentProduit[type].filter((_, i) => i !== index);
    setCurrentProduit({ ...currentProduit, [type]: updatedArray });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCurrentProduit({ ...currentProduit, image: e.target.files[0].name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...currentProduit,
      taille: currentProduit.taille.filter(t => t.trim() !== ""),
      couleur: currentProduit.couleur.filter(c => c.trim() !== ""),
      prix: Number(currentProduit.prix),
      stock: Number(currentProduit.stock)
    };

    try {
      if (isEditing) {
        await axios.put(`${API_BASE_URL}/produits/${currentProduit.id}`, finalData);
      } else {
        await axios.post(`${API_BASE_URL}/produits`, { ...finalData, id: Date.now().toString() });
      }
      setShowModal(false);
      fetchData();
    } catch (error) { alert("Erreur lors de l'enregistrement !"); }
  };

  const openAddModal = () => {
    setCurrentProduit({ id: "", nom: "", prix: "", image: "", description: "", taille: [""], couleur: [""], stock: "", categorie: "" });
    setIsEditing(false);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const endpoint = activeTab === "liste" ? "commandes" : "produits";
    if (window.confirm("Supprimer cet élément ?")) {
      try {
        await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
        fetchData();
      } catch (error) { alert("Erreur suppression"); }
    }
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header"><h3>Eventify Admin</h3></div>
        <nav className="sidebar-nav">
          <button className={activeTab === "liste" ? "active" : ""} onClick={() => setActiveTab("liste")}>📋 Commandes</button>
          <button className={activeTab === "produits" ? "active" : ""} onClick={() => setActiveTab("produits")}>📦 Produits</button>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="main-header">
          <h2>{activeTab === "liste" ? "Toutes les Commandes" : "Gestion du Stock"}</h2>
          {activeTab === "produits" && <button className="btn-add" onClick={openAddModal}>+ Nouveau Produit</button>}
        </header>

        <section className="content-area">
          <table className="admin-table">
            <thead>
              {activeTab === "liste" ? (
                <tr><th>ID</th><th>Client</th><th>Ville</th><th>Date</th><th>Actions</th></tr>
              ) : (
                <tr><th>Image</th><th>Nom</th><th>Stock</th><th>Prix</th><th>Actions</th></tr>
              )}
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  {activeTab === "liste" ? (
                    <>
                      <td>#{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.date}</td>
                      <td>
                        <button className="btn-delete" onClick={() => handleDelete(item.id)}>🗑️</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td><img src={`/images/${item.image}`} width="40" alt="" height="40" style={{objectFit: 'cover'}} /></td>
                      <td>{item.nom}</td>
                      <td>{item.stock} pcs</td>
                      <td>{item.prix} DH</td>
                      <td>
                        <button className="btn-edit" onClick={() => {
                          setCurrentProduit({
                            ...item,
                            taille: item.taille || [""],
                            couleur: item.couleur || [""]
                          });
                          setIsEditing(true);
                          setShowModal(true);
                        }}>✏️</button>
                        <button className="btn-delete" onClick={() => handleDelete(item.id)}>🗑️</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {/* --- Modal Formulaire المطور --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content dynamic-form">
            <h3>{isEditing ? "Modifier" : "Ajouter"} Produit</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label>Nom du produit</label>
                  <input type="text" placeholder="Ex: Bonnet" value={currentProduit.nom} onChange={e => setCurrentProduit({...currentProduit, nom: e.target.value})} required />
                </div>
                <div>
                  <label>Catégorie</label>
                  <input type="text" placeholder="Ex: Hiver" value={currentProduit.categorie} onChange={e => setCurrentProduit({...currentProduit, categorie: e.target.value})} required />
                </div>
                <div>
                  <label>Prix (DH)</label>
                  <input type="number" placeholder="0.00" value={currentProduit.prix} onChange={e => setCurrentProduit({...currentProduit, prix: e.target.value})} required />
                </div>
                <div>
                  <label>Stock (Quantité)</label>
                  <input type="number" placeholder="0" value={currentProduit.stock} onChange={e => setCurrentProduit({...currentProduit, stock: e.target.value})} required />
                </div>
              </div>

              <div className="file-input-group">
                <label>Image du produit</label>
                <input type="file" accept="image/*" onChange={handleFileChange} required={!isEditing} />
                {currentProduit.image && <small style={{display: 'block', marginTop: '5px'}}>Image sélectionnée: <strong>{currentProduit.image}</strong></small>}
              </div>

              <div className="dynamic-section">
                <label>Tailles disponibles</label>
                {currentProduit.taille.map((t, index) => (
                  <div key={index} className="dynamic-row">
                    <input type="text" placeholder="Ex: S, M, XL..." value={t} onChange={e => handleDynamicChange(index, e.target.value, "taille")} required />
                    {currentProduit.taille.length > 1 && <button type="button" className="btn-remove" onClick={() => removeField(index, "taille")}>×</button>}
                  </div>
                ))}
                <button type="button" className="btn-mini" onClick={() => addField("taille")}>+ Ajouter une taille</button>
              </div>

              <div className="dynamic-section">
                <label>Couleurs disponibles</label>
                {currentProduit.couleur.map((c, index) => (
                  <div key={index} className="dynamic-row">
                    <input type="text" placeholder="Ex: Noir, Rouge..." value={c} onChange={e => handleDynamicChange(index, e.target.value, "couleur")} required />
                    {currentProduit.couleur.length > 1 && <button type="button" className="btn-remove" onClick={() => removeField(index, "couleur")}>×</button>}
                  </div>
                ))}
                <button type="button" className="btn-mini" onClick={() => addField("couleur")}>+ Ajouter une couleur</button>
              </div>

              <div style={{marginTop: '15px'}}>
                <label>Description</label>
                <textarea placeholder="Décrivez le produit..." value={currentProduit.description} onChange={e => setCurrentProduit({...currentProduit, description: e.target.value})} required />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Annuler</button>
                <button type="submit" className="btn-save">Enregistrer le produit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
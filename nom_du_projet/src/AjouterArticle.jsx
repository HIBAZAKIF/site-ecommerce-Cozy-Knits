import React, { useState } from "react";

function AjouterArticle({ articles, setArticles }) {
  const [nomA, setNomA] = useState("");
  const [pu, setPu] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
      // Crée une URL temporaire (type blob:) qui permet d’afficher immédiatement l’image choisie
    setPreview(URL.createObjectURL(file));
  };

  const ajouter = () => {
    if (!nomA || !pu ) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

     const imageUrl = preview || "Fournitures-Scolaires.JPG";
    setArticles([
      ...articles,
      { id: Date.now(), nomA, pu: Number(pu),  image: imageUrl },
    ]);

    setNomA("");
    setPu("");
    setImageFile(null);
    setPreview(null);
  };

  return (
    <div className="card p-4 shadow-sm mb-5">
      <h5>➕ Ajouter un article</h5>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nom"
          value={nomA}
          onChange={(e) => setNomA(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Prix"
          value={pu}
          onChange={(e) => setPu(e.target.value)}
        />
      </div>

     

      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <div className="d-grid mb-3">
        <button className="btn btn-success" onClick={ajouter}>Ajouter</button>
      </div>

    
        <div className="mt-3">
          <h6>Aperçu :</h6>
          <img     src={preview || "/images/Fournitures-Scolaires.JPG"}  style={{ height: "150px" }}/>
        </div>
     
    </div>
  );
}

export default AjouterArticle;

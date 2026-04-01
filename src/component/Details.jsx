import { useState } from "react";

export default function Details( { setShowDetails, selectedProduct  , setPanier} ) {
    const [maTaille, setMaTaille] = useState("");
    const [maCouleur, setMaCouleur] = useState("");
  return (
    <div className="modal active" role="dialog" aria-modal="true" aria-label="Détails du produit">
      <div className="modal-content">
        <button className="close-modal" aria-label="Fermer" onClick={() => setShowDetails(false)}>
          ×
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img
              src= { `img/${selectedProduct.image}` }
              alt={selectedProduct.nom}
            />
          </div>

          <div className="modal-info">
            <h2>{selectedProduct.nom}</h2>
            <p className="modal-price">{selectedProduct.prix} dh</p>

            <p>{selectedProduct.description}</p>

             {/* --- اختيارات القياس (Taille) --- */}
            <div className="variant-options">
              {selectedProduct.taille.map((taille) => (
                <button 
                  key={taille}
                  // هنا السحر: إذا كانت maTaille هي هاد taille، كنزيدو كلاس selected
                  className={`variant-option ${maTaille === taille ? "selected" : ""}`} 
                  onClick={() => setMaTaille(taille)}
                >
                  {taille}
                </button>
              ))}
            </div>

            {/* --- اختيارات اللون (Couleur) --- */}
            <div className="variant-options">
              {selectedProduct.couleur.map((couleur) => (
                <button 
                  key={couleur}
                  // نفس المنطق: إذا كان maCouleur هو هاد لون، كنزيدو كلاس selected
                  className={`variant-option ${maCouleur === couleur ? "selected" : ""}`} 
                  onClick={() => setMaCouleur(couleur)}
                >
                  {couleur}
                </button>
              ))}
            </div>

            <div className="modal-actions">
              <button className="modal-add-to-cart" onClick={() => {   setPanier((prevPanier) => [...prevPanier, { id : selectedProduct.id , nom : selectedProduct.nom ,image : selectedProduct.image , prix : selectedProduct.prix  , taille : maTaille , couleur : maCouleur }] ) ; setShowDetails(false)}}>Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

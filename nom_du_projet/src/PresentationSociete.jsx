import React from "react";

function PresentationSociete() {
  return (
    <div className="container my-5">
      <div className="row align-items-center shadow-sm p-4">
        {/* Texte à gauche */}
        <div className="col-md-6"
                    style={{backgroundColor:"beige", borderRadius: "8px", height: "300px" }}
>
          <h3>🌟 Notre Société</h3>
          <p>
            Bienvenue chez <strong>NomDeLaSociete</strong>, leader dans la
            vente de fournitures scolaires et de bureau. Nous offrons des
            produits de qualité pour répondre aux besoins des étudiants et
            professionnels. Notre engagement : qualité, fiabilité et
            satisfaction client.
          </p>
          <ul>
            <li>Fournitures scolaires</li>
            <li>Fournitures de bureau</li>
            <li>Service client 24/7</li>
          </ul>
        </div>

        {/* Image à droite */}
        <div className="col-md-6">
          <img
            src="images/Fournitures-Scolaires.JPG" // mettre ton image dans public/images
            alt="Logo Société"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PresentationSociete;

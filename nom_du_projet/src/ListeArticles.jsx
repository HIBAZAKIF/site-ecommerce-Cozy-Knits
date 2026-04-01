import React from "react";
import PresentationSociete from "./PresentationSociete";
import MapAvecAdresse from "./MapAvecAdresse";
import CarteAdresse from "./Carte";
function ListeArticles({ articles }) {
  return (
  <div className="container mt-4">
    <PresentationSociete />
    
      <h2 className="mb-4 text-center">📋 Nos Articles</h2>
      <div className="row">
        {articles.map((a) => (
          <div className="col-md-4 mb-4" key={a.id}>
            <div className="card shadow-sm h-100">
              <img
                src={a.image.startsWith("blob:") ? a.image : `images/${a.image}`}
                className="card-img-top"
                alt={a.nomA}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{a.nomA}</h5>
                <p className="card-text">
                  💰 Prix : <strong>{a.pu} DH</strong><br/>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <MapAvecAdresse /> */}
    <CarteAdresse />

    </div>
  );
}

export default ListeArticles;

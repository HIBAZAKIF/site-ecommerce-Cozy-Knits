import React from "react";

function CarteAdresse() {
  const adresse = "ISGI AZLI OFPPT MARRAKECH";

  // Tu peux ajuster le zoom ici : plus le chiffre est grand, plus on est proche (15 = rue, 10 = ville)
  const zoom = 16;

  // Lien Google Maps avec marqueur et zoom
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(adresse)}&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div style={{ width: "100%", height: "350px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
      <iframe
        title="Carte ISGI AZLI OFPPT Marrakech"
        width="100%"
        height="100%"
        style={{ border: "2px solid" }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
}

export default CarteAdresse;

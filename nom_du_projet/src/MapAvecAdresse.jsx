import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

function MapAvecAdresse() {
  const [coords, setCoords] = useState(null);
  const adresse = "ISGI AZLI OFPPT MARRAKECH"; // adresse de ta société
  const apiKey = "TA_CLE_API_ICI"; // ta clé Google Maps

  useEffect(() => {
    // Géocodage de l'adresse
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(adresse)}&key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.results.length > 0) {
          setCoords(data.results[0].geometry.location);
        } else {
          console.log("Adresse non trouvée");
        }
      });
  }, [adresse, apiKey]);

  if (!coords) return <p>Chargement de la carte...</p>;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords}
        zoom={15}
      >
        <Marker position={coords} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapAvecAdresse;

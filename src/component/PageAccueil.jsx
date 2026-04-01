import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Catalogue from "./Catalogue";
import Footer from "./Footer";
import '../App.css';
import Details from "./Details";
import Panier from "./Panier";
import Formulaire from "./Formulaire";


export default function PageAccueil() {
    const [showDetails, setShowDetails] = useState(false);
    const [showPanier, setShowPanier] = useState(false);
    const [showFormulair, setShowFormulair] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [panier , setPanier] = useState([]);
    console.log("Panier actuel :", panier);
  return (
    <div>
        <Header setShowPanier={setShowPanier} />
        <Hero/>
        <Catalogue showDetails={showDetails} setShowDetails={setShowDetails} setSelectedProduct={setSelectedProduct} />
        <Footer/>
        {showDetails && <Details setShowDetails={setShowDetails} selectedProduct={selectedProduct} setPanier={setPanier} />}
        {showPanier && <Panier panier={panier}  showPanier={showPanier} setShowPanier={setShowPanier} setShowFormulair={setShowFormulair} />}
        {showFormulair && <Formulaire showFormulair={showFormulair} panier={panier} setShowFormulair={setShowFormulair} />}

    </div>
  );
}



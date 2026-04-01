import { useEffect, useState } from "react";
import axios from "axios";


function Catalogue( {  setShowDetails , setSelectedProduct } ) {

  const [produits, setProduits] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/produits")
      .then(res => setProduits(res.data));
  } , []);

  return (
    <div>
      <section id="products">
        <h2 className="section-title">Notre Collection</h2>

        <div className="filters">
          <button className="filter-btn active" data-category="all">Tous</button>
          <button className="filter-btn" data-category="bonnets">Bonnets</button>
          <button className="filter-btn" data-category="echarpes">Écharpes</button>
          <button className="filter-btn" data-category="pulls">Pulls</button>
          <button className="filter-btn" data-category="accessoires">Accessoires</button>
        </div>

        <div className="products-grid" id="productsGrid">
          {produits.map(produit => (
            <div className="product-card" key={produit.id}>
              <div className="product-image">
                <img src= { `img/${produit.image}` } alt={`${produit.nom}`} />
              </div>
              <div className="product-info">
                {produit.categorie && <div className="product-category">{produit.categorie}</div>}
                <h3 className="product-title">{produit.nom}</h3>
                <p className="product-description">{produit.description}</p>
                <div className="product-footer">
                  <div className="product-price">{produit.prix} dh</div>
                  <button className="add-to-cart" onClick={() => { setShowDetails(true); setSelectedProduct(produit); } }>Détails</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Catalogue;
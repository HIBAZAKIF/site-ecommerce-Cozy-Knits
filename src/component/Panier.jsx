export default function Panier({ panier, showPanier, setShowPanier , setShowFormulair }) {

  return (
    <div className={`cart-sidebar ${showPanier ? "open" : ""}`}>

      {/* Header */}
      <div className="cart-header">
        <h2>Mon Panier</h2>
        <button
          className="close-cart"
          onClick={() => setShowPanier(false)}
        >
          ×
        </button>
      </div>

      {/* Items */}
      <div className="cart-items">
        {panier.length > 0 ? (
          panier.map((product) => (
            <div key={product.id} className="cart-item">

              <img
                src={ `img/${product.image}` } 
                className="cart-item-image"
                alt={product.nom}
              />

              <div className="cart-item-info">
                <p className="cart-item-title">{product.nom}</p>
                <p className="cart-item-price">{product.prix} dh</p>

                {/* options (taille / couleur) */}
                {product.taille && <p>Taille: {product.taille}</p>}
                {product.couleur && <p>Couleur: {product.couleur}</p>}
              </div>

            </div>
          ))
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p>Votre panier est vide</p>
          </div>
        )}
      </div>

      {/* Footer */}
      {panier.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total :</span>
            <span>
              {panier.reduce((total, p) => total + p.prix, 0)} dh
            </span>
          </div>

          <button className="checkout-btn" onClick={() => setShowFormulair(true)}>
            Commander
          </button>
        </div>
      )}

    </div>
  );
}
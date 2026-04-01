function Header ({ setShowPanier }) {
    console.log("setShowPanier dans Header :", setShowPanier);
  return (
    <header>
        <nav>
            <span className="logo">Cozy Knits</span>
            <ul className="nav-links">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#products">Produits</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#testimonials">Avis</a></li>
            </ul>
            <div className="nav-icons">
                <button className="icon-btn" id="themeToggle" title="Changer le thème">🌙</button>
                <button className="icon-btn" id="cartBtn" title="Panier" onClick={() => setShowPanier(true)}>
                    🛒
                    <span className="cart-count" id="cartCount">0</span>
                </button>
            </div>
        </nav>
    </header>
  );
}

export default Header;
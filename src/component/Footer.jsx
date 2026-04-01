function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h3>Cozy Knits</h3>
                <p>Créations artisanales en tricot, faites à la main avec passion et amour.</p>
            </div>
            <div className="footer-section">
                <h3>Liens rapides</h3>
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#products">Produits</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#testimonials">Avis clients</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <ul>
                    <li>📧 contact@cozyknits.fr</li>
                    <li>📞 +33 6 12 34 56 78</li>
                    <li>📍 Grenoble, France</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Newsletter</h3>
                <p>Recevez nos nouveautés et offres exclusives</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Votre email" required />
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Cozy Knits. Tous droits réservés. Fait avec ❤️</p>
        </div>
    </footer>
  );
}

export default Footer;
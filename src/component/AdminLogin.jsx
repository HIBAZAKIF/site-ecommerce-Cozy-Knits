import { useState } from "react";
import AdminPage from "./AdminPage";

export default function AdminLogin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login === "admin" && password === "123") {
            setIsAuthenticated(true);
        } else {
            alert("Identifiants incorrects");
        }
    };

    // الطريقة الأسهل والأكثر نقاءً في React هي هادي:
    if (isAuthenticated) {
        return <AdminPage />;
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="admin-icon">👤</div>
                    <h2>Espace Admin</h2>
                    <p>Veuillez vous identifier pour accéder au tableau de bord</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Identifiant</label>
                        <input
                            type="text"
                            id="login"
                            placeholder="Ex: admin_2026"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}
import React, { useState } from "react";

function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "1234") {
      onLogin(true);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="mb-4 text-center">🔒 Connexion Dashboard</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nom d'utilisateur"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

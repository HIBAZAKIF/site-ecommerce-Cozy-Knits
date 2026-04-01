import { useState } from "react";
import axios from "axios";


export default function Formulaire({ showFormulair, panier, setShowFormulair }) {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  const handleSubmit = async (e) => { // رجعنا الدالة الأصلية async
    e.preventDefault();
    
    const orderData = {
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      address: clientAddress,
      date : new Date().toLocaleString(),
      produit : panier
    };

    try {
      // دابا الكود غادي يوقف هنا حتى يجاوب السيرفر بنجاح
      await axios.post("http://localhost:3001/commandes", orderData);
      
      // هادشي ما غادي يطرا حتى ينجح الـ post
      alert("تم استقبال طلبك بنجاح!");
      setClientAddress("");
      setClientEmail("");
      setClientName("");
      setClientPhone("");
      setShowFormulair(false);
      
    } catch (error) {
      // إلا طرا مشكل (سيرفر طافي مثلاً)
      console.error("Erreur lors de l'envoi:", error);
      alert("عذراً، وقع خطأ. حاول مرة أخرى.");
      // هنا الـ inputs ما غاديش يتمسحو، باش الزبون ما يضيعش فداكشي اللي كتب
    }
  };

  return (
    <div className="order-modal" id="orderModal">
      <div className="order-modal-content">
        <button className="close-modal" id="closeOrderModal">×</button>
        
        {/* تصحيح الـ Style هنا: نستخدم الأقواس المزدوجة و CamelCase */}
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Information du client
        </h2>
        
        <form id="orderForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Le nom complet</label>
            <input 
              type="text" 
              value={clientName} 
              onChange={(e) => setClientName(e.target.value)} 
              placeholder="Entrez votre nom complet" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Le numéro de téléphone</label>
            <input 
              type="tel" 
              value={clientPhone} 
              onChange={(e) => setClientPhone(e.target.value)} 
              placeholder="06XXXXXXXX" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Le courriel (Gmail)</label>
            <input 
              type="email" 
              value={clientEmail} 
              onChange={(e) => setClientEmail(e.target.value)} 
              placeholder="example@gmail.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Le adresse complète</label>
            <textarea 
              value={clientAddress} 
              onChange={(e) => setClientAddress(e.target.value)} 
              rows="3" 
              placeholder="Entrez votre adresse complète..." 
              required
            ></textarea>
          </div>

          <button type="submit" className="checkout-btn">
              Soumettre l'ordre
          </button>
        </form>
      </div>
    </div>
  );
}
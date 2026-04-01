import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAccueil from "./component/PageAccueil";
import AdminLogin from "./component/AdminLogin";


export default function App() {
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
      </Routes>

      <Routes>
        <Route path="/Admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}



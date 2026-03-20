import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// Importaremos Portfolio y ProjectDetail más adelante
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar eliminado para que solo aparezca en Home */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rutas futuras */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
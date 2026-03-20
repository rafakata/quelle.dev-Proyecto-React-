import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
// Importaremos ProjectDetail más adelante
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar eliminado para que solo aparezca en Home */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/trabajos/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
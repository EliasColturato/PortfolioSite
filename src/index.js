import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OrcamentoPage from './pages/OrcamentoPage';
import Cases from './pages/Cases';
import QuemSou from './pages/QuemSou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orcamento" element={<OrcamentoPage />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/quem-sou" element={<QuemSou />} />
      </Routes>
    </Router>
    {/* <HomePage />
    <OrcamentoPage /> */}
  </React.StrictMode>
);

reportWebVitals();

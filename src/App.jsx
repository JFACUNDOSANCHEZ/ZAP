// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- ¡Importamos esto!

import Home from './components/home/Home';
import ProjectDetail from './components/projectDetail/ProjectDetail'; // <-- ¡Importamos el nuevo componente!

import './App.css'; 

function App() {
  return (
    <Router> {/* Envuelve toda tu aplicación con Router */}
      <div className="App">
        <Routes> {/* Define tus rutas aquí */}
          <Route path="/" element={<Home />} /> {/* Ruta para tu página de inicio */}
          {/* Ruta para el detalle de proyectos. :id es un parámetro dinámico */}
          <Route path="/proyectos/:id" element={<ProjectDetail />} /> 
          
          {/* Si tienes otras rutas para componentes que no están en Home, las agregarías aquí.
              Por ejemplo, si ContactSection fuera una página independiente:
              <Route path="/contacto" element={<ContactSection />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
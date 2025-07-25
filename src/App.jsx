// src/App.js
import React from 'react';
import BrandsSection from './components/brandsSection/BrandsSection';
import Home from './components/home/Home'; 
import ProjectGrid from './components/proyects/ProjectGrid';
import ContactSection from './components/contactSection/ContactSection';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Home />
      
      
      {/* <ProjectGrid /> */}
      {/* <BrandsSection/> */}
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
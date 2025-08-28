import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import PricingCards from './components/PricingCards';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HelpPage from './pages/HelpPage';
import EyeCorner from './components/EyeCorner';


function App() {
  return (
    <Router>
      <div className="App">
        <EyeCorner />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <PricingCards />
              <CTA />
            </>
          } />
          <Route path="/ayuda" element={<HelpPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

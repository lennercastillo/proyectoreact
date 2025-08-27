import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PricingCards from './components/PricingCards';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HelpPage from './pages/HelpPage';
import VisitCounter from './components/VisitCounter';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <VisitCounter />
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

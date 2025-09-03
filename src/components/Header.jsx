import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDownload, FaQuestionCircle } from 'react-icons/fa';
import './Header.css';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/assets/logo/logoPV_btnInicio.png" alt="Logo Sistema Inventario" className="logo" />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            to="/ayuda" 
            className={`nav-link ${location.pathname === '/ayuda' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaQuestionCircle className="nav-icon" />
            Ayuda
          </Link>
          <a 
            href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link download-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaDownload className="nav-icon" />
            Descargar
          </a>
        </nav>
        
        {/* Backdrop overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-backdrop" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;

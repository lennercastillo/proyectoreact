import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/assets/logo/logoPV_btnInicio.png" alt="Logo Sistema Inventario" className="logo" />
            <span className="logo-text">Sistema Inventario</span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
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
            Ayuda
          </Link>
          <a 
            href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link download-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Descargar
          </a>
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;

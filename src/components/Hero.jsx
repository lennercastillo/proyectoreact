import { Link } from 'react-router-dom';
import { FaDownload, FaPlay, FaArrowRight, FaWindows } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero::before"></div>
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>Nuevo Sistema 2024</span>
          </div>
          
          <h1 className="hero-title">
            Sistema de Inventario 
            <span className="hero-title-highlight">Profesional</span>
          </h1>
          
          <p className="hero-subtitle">
            Software de escritorio para Windows que transforma la gestión de tu inventario. 
            Control total de stock, reportes avanzados y base de datos local segura.
          </p>
          
          <div className="hero-buttons">
            <a 
              href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-hero"
            >
              <FaDownload className="btn-icon" />
              Descargar para Windows
              <FaArrowRight className="btn-arrow" />
            </a>
            
            <Link to="/ayuda" className="btn btn-secondary btn-hero">
              <FaPlay className="btn-icon" />
              Ver Ayuda
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <FaWindows className="feature-icon" />
              <span>Compatible con Windows 10/11</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">⚡</span>
              <span>Instalación en 5 minutos</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">🔒</span>
              <span>Sistema completo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

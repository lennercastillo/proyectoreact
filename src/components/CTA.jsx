import { FaWindows } from 'react-icons/fa';

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>¿Listo para transformar tu negocio?</h2>
          <p>
            Descarga nuestro sistema profesional de escritorio para Windows y 
            mejora la gestión de tu inventario desde el primer día.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Descargar para Windows
            </a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <FaWindows className="cta-icon" />
              <span>Windows 10/11</span>
            </div>
            <div className="cta-feature">
              <span className="cta-icon">⚡</span>
              <span>Instalación rápida</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">🔒</span>
              <span>Sistema completo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

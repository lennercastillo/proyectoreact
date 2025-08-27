import { useState, useEffect } from 'react';
import { FaEye, FaUsers, FaClock } from 'react-icons/fa';

function LiveVisitsBanner() {
  const [currentVisitors, setCurrentVisitors] = useState(0);
  const [totalVisits, setTotalVisits] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el banner después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Obtener datos del localStorage
    const getVisitData = () => {
      const storedData = localStorage.getItem('visitData');
      if (storedData) {
        const data = JSON.parse(storedData);
        setTotalVisits(data.totalVisits || 0);
        
        // Simular visitantes en tiempo real
        const randomVisitors = Math.floor(Math.random() * 15) + 5;
        setCurrentVisitors(randomVisitors);
      }
    };

    getVisitData();

    // Actualizar cada 3 segundos para simular actividad en tiempo real
    const interval = setInterval(() => {
      getVisitData();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="live-visits-banner">
      <div className="banner-content">
        <div className="banner-item">
          <FaEye className="banner-icon" />
          <span className="banner-text">
            <strong>{totalVisits}</strong> visitas totales
          </span>
        </div>
        
        <div className="banner-divider"></div>
        
        <div className="banner-item">
          <FaUsers className="banner-icon" />
          <span className="banner-text">
            <strong>{currentVisitors}</strong> visitantes ahora
          </span>
        </div>
        
        <div className="banner-divider"></div>
        
        <div className="banner-item">
          <FaClock className="banner-icon" />
          <span className="banner-text">
            Actualizado <strong>ahora</strong>
          </span>
        </div>
      </div>
      
      <button 
        className="banner-close"
        onClick={() => setIsVisible(false)}
        aria-label="Cerrar banner"
      >
        ×
      </button>
    </div>
  );
}

export default LiveVisitsBanner;

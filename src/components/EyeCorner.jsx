import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

const EyeCorner = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Obtener el contador de visitas del localStorage o inicializar en 0
    const currentCount = localStorage.getItem('visitCount') || 0;
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  return (
    <div className="eye-corner">
      <div className="eye-icon">
        <FaEye />
      </div>
      <div className="visit-counter">
        <span className="visit-number">{visitCount}</span>
        <span className="visit-label">vistas</span>
      </div>
    </div>
  );
};

export default EyeCorner;

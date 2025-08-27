import { useState, useEffect } from 'react';
import { FaEye, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedData = localStorage.getItem('visitData');
    let data = storedData ? JSON.parse(storedData) : {
      totalVisits: 0,
      todayVisits: 0,
      uniqueVisitors: 0,
      lastVisit: null,
      visitorId: null
    };

    // Generar ID único para este visitante si no existe
    if (!data.visitorId) {
      data.visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Verificar si es un nuevo visitante
    const isNewVisitor = !data.visitorId || data.visitorId !== data.visitorId;

    // Obtener fecha actual
    const today = new Date().toDateString();
    const lastVisitDate = data.lastVisit ? new Date(data.lastVisit).toDateString() : null;

    // Incrementar contadores
    data.totalVisits += 1;
    
    if (lastVisitDate !== today) {
      data.todayVisits += 1;
    }

    if (isNewVisitor) {
      data.uniqueVisitors += 1;
    }

    data.lastVisit = new Date().toISOString();

    // Guardar en localStorage
    localStorage.setItem('visitData', JSON.stringify(data));

    // Actualizar estado
    setVisitCount(data.totalVisits);
    setTodayVisits(data.todayVisits);
    setUniqueVisitors(data.uniqueVisitors);
    setLastVisit(data.lastVisit);

    // Simular visitas adicionales para demostración
    const simulateVisits = () => {
      setTimeout(() => {
        data.totalVisits += Math.floor(Math.random() * 3) + 1;
        data.todayVisits += Math.floor(Math.random() * 2) + 1;
        localStorage.setItem('visitData', JSON.stringify(data));
        setVisitCount(data.totalVisits);
        setTodayVisits(data.todayVisits);
      }, 5000);
    };

    simulateVisits();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return 'Nunca';
    
    const now = new Date();
    const lastVisit = new Date(dateString);
    const diffInSeconds = Math.floor((now - lastVisit) / 1000);
    
    if (diffInSeconds < 60) return 'Hace un momento';
    if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} minutos`;
    if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;
    return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
  };

  return (
    <div className="visit-counter">
      <div className="visit-counter-header">
        <h3>Estadísticas del Sistema</h3>
        <p>Monitoreo en tiempo real de visitas</p>
      </div>
      
      <div className="visit-stats-grid">
        <div className="stat-card total-visits">
          <div className="stat-icon">
            <FaEye />
          </div>
          <div className="stat-content">
            <h4>Total de Visitas</h4>
            <div className="stat-number">{formatNumber(visitCount)}</div>
            <div className="stat-label">Accesos totales</div>
          </div>
          <div className="stat-animation">
            <div className="pulse-dot"></div>
          </div>
        </div>

        <div className="stat-card today-visits">
          <div className="stat-icon">
            <FaChartLine />
          </div>
          <div className="stat-content">
            <h4>Visitas Hoy</h4>
            <div className="stat-number">{formatNumber(todayVisits)}</div>
            <div className="stat-label">Accesos del día</div>
          </div>
          <div className="stat-animation">
            <div className="trend-up">↗</div>
          </div>
        </div>

        <div className="stat-card unique-visitors">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-content">
            <h4>Visitantes Únicos</h4>
            <div className="stat-number">{formatNumber(uniqueVisitors)}</div>
            <div className="stat-label">Usuarios diferentes</div>
          </div>
          <div className="stat-animation">
            <div className="user-icon">👤</div>
          </div>
        </div>

        <div className="stat-card last-visit">
          <div className="stat-icon">
            <FaGlobe />
          </div>
          <div className="stat-content">
            <h4>Última Visita</h4>
            <div className="stat-number">{getTimeAgo(lastVisit)}</div>
            <div className="stat-label">Actividad reciente</div>
          </div>
          <div className="stat-animation">
            <div className="clock">🕐</div>
          </div>
        </div>
      </div>

      <div className="visit-counter-footer">
        <div className="real-time-indicator">
          <div className="indicator-dot"></div>
          <span>Actualización en tiempo real</span>
        </div>
        <div className="visit-note">
          <small>📊 Las estadísticas se actualizan automáticamente</small>
        </div>
      </div>
    </div>
  );
}

export default VisitCounter;

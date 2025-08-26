import { 
  FaBoxes, 
  FaChartLine, 
  FaUsers, 
  FaShieldAlt, 
  FaDesktop, 
  FaDatabase 
} from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaBoxes />,
      title: "Gestión de Inventario",
      description: "Control total de stock, productos y categorías con alertas automáticas de inventario bajo.",
      color: "var(--primary-color)"
    },
    {
      icon: <FaChartLine />,
      title: "Reportes Avanzados",
      description: "Análisis detallado de ventas, tendencias y rendimiento con gráficos interactivos.",
      color: "var(--secondary-color)"
    },
    {
      icon: <FaUsers />,
      title: "Multi-Usuario",
      description: "Sistema de roles y permisos para equipos de trabajo con acceso controlado.",
      color: "var(--accent-color)"
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguridad Total",
      description: "Encriptación de datos, backups automáticos y protección contra pérdida de información.",
      color: "#10b981"
    },
    {
      icon: <FaDesktop />,
      title: "Sistema de Escritorio",
      description: "Aplicación nativa para Windows con interfaz intuitiva y rápida respuesta.",
      color: "#8b5cf6"
    },
    {
      icon: <FaDatabase />,
      title: "Base de Datos Local",
      description: "Almacenamiento local seguro con respaldos automáticos y sincronización.",
      color: "#f97316"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Características del Sistema</h2>
          <p>Software profesional de escritorio diseñado específicamente para Windows</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

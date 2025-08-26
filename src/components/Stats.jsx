import { FaUsers, FaBoxes, FaGlobe, FaStar } from 'react-icons/fa';

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "50,000+",
      label: "Usuarios Activos",
      description: "Empresas confían en nuestro sistema"
    },
    {
      icon: <FaBoxes />,
      number: "2M+",
      label: "Productos Gestionados",
      description: "Inventarios controlados exitosamente"
    },
    {
      icon: <FaGlobe />,
      number: "150+",
      label: "Países",
      description: "Presencia internacional"
    },
    {
      icon: <FaStar />,
      number: "4.9/5",
      label: "Calificación",
      description: "Satisfacción del cliente"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

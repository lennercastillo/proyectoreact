function PricingCards() {
  const plans = [
    {
      name: "Plan Básico",
      price: "$29.99",
      period: "por mes",
      features: [
        "Gestión básica de inventario",
        "Hasta 100 productos",
        "Reportes básicos",
        "Soporte por email",
        "Actualizaciones gratuitas"
      ],
      popular: false
    },
    {
      name: "Plan Profesional",
      price: "$59.99",
      period: "por mes",
      features: [
        "Gestión completa de inventario",
        "Productos ilimitados",
        "Reportes avanzados",
        "Soporte prioritario",
        "Múltiples usuarios",
        "Backup automático",
        "Integración con sistemas"
      ],
      popular: true
    },
    {
      name: "Plan Empresarial",
      price: "$99.99",
      period: "por mes",
      features: [
        "Todo del plan Profesional",
        "API personalizada",
        "Soporte 24/7",
        "Capacitación incluida",
        "Personalización completa",
        "Múltiples sucursales",
        "Analytics avanzados"
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Planes y Precios</h2>
          <p>Elige el plan que mejor se adapte a tus necesidades</p>
        </div>
        
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Más Popular</div>}
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="btn btn-primary btn-full">
                Comenzar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingCards;

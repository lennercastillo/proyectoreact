function PricingCards() {
  const plans = [
    {
      name: "Plan Básico",
      price: "$29",
      period: "mes",
      description: "Perfecto para pequeñas empresas",
      features: [
        "Gestión básica de inventario",
        "Hasta 100 productos",
        "Reportes básicos",
        "Soporte por email"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Plan Profesional",
      price: "$59",
      period: "mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Gestión completa de inventario",
        "Productos ilimitados",
        "Reportes avanzados",
        "Soporte prioritario",
        "Múltiples usuarios"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Plan Empresarial",
      price: "$99",
      period: "mes",
      description: "Para grandes organizaciones",
      features: [
        "Todo del plan Profesional",
        "API personalizada",
        "Soporte 24/7",
        "Capacitación incluida",
        "Múltiples sucursales"
      ],
      popular: false,
      color: "green"
    }
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'blue': return 'color-blue';
      case 'purple': return 'color-purple';
      case 'green': return 'color-green';
      default: return 'color-blue';
    }
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Planes y Precios</h2>
          <p>Elige el plan que mejor se adapte a tus necesidades</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'featured' : ''} ${getColorClass(plan.color)}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <span>⭐ Más Popular</span>
                </div>
              )}
              
              <div className="pricing-header">
                <div className="plan-icon">
                  {plan.color === 'blue' && '🚀'}
                  {plan.color === 'purple' && '💎'}
                  {plan.color === 'green' && '🏢'}
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`pricing-button ${plan.popular ? 'featured' : ''}`}>
                {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingCards;

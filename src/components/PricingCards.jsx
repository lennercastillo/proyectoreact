import { useState } from 'react';
import { FaDownload, FaCheckCircle, FaArrowRight, FaStar, FaCrown } from 'react-icons/fa';
import './PricingCards.css';

function PricingCards() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

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
      color: "blue",
      icon: "🚀",
      savings: "Ahorra $348/año"
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
      color: "purple",
      icon: "💎",
      savings: "Ahorra $708/año"
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
      color: "green",
      icon: "🏢",
      savings: "Ahorra $1188/año"
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

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    
    // Add selection animation
    const card = document.querySelector(`[data-plan="${plan.name}"]`);
    if (card) {
      card.classList.add('plan-selected');
      setTimeout(() => card.classList.remove('plan-selected'), 1000);
    }
    
    // Scroll to CTA section for download
    const ctaSection = document.getElementById('descargar');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Show success message with better UX
    const message = `¡Plan ${plan.name} seleccionado! 🎉\n\nPrecio: ${plan.price}/${plan.period}\n${plan.savings}\n\nRedirigiendo a la descarga...`;
    alert(message);
  };

  const handleDownload = () => {
    // Add download animation
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
      downloadBtn.classList.add('downloading');
      setTimeout(() => {
        downloadBtn.classList.remove('downloading');
        window.open('https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY', '_blank');
      }, 1000);
    } else {
      window.open('https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY', '_blank');
    }
  };

  const handleCardHover = (planName) => {
    setHoveredPlan(planName);
  };

  const handleCardLeave = () => {
    setHoveredPlan(null);
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Planes y Precios</h2>
          <p>Elige el plan que mejor se adapte a tus necesidades</p>
          <div className="pricing-subtitle">
            <FaStar className="star-icon" />
            <span>Todos los planes incluyen actualizaciones gratuitas y soporte técnico</span>
          </div>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'featured' : ''} ${getColorClass(plan.color)} ${hoveredPlan === plan.name ? 'hovered' : ''}`}
              data-plan={plan.name}
              onMouseEnter={() => handleCardHover(plan.name)}
              onMouseLeave={handleCardLeave}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <FaCrown className="crown-icon" />
                  <span>⭐ Más Popular</span>
                </div>
              )}
              
              <div className="pricing-header">
                <div className="plan-icon">
                  {plan.icon}
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <div className="savings-info">
                  <span className="savings-text">{plan.savings}</span>
                </div>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="check-icon">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`pricing-button ${plan.popular ? 'featured' : ''}`}
                onClick={() => handlePlanSelection(plan)}
                onMouseEnter={() => handleCardHover(plan.name)}
              >
                {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
                <FaArrowRight className="button-arrow" />
              </button>
            </div>
          ))}
        </div>
        
        {selectedPlan && (
          <div className="plan-selection-feedback">
            <div className="feedback-content">
              <FaCheckCircle className="feedback-icon" />
              <h3>Plan Seleccionado: {selectedPlan.name}</h3>
              <p>Has seleccionado el plan <strong>{selectedPlan.name}</strong> por <strong>{selectedPlan.price}/{selectedPlan.period}</strong>.</p>
              <p className="savings-highlight">{selectedPlan.savings}</p>
              <button className="btn btn-primary btn-large download-btn" onClick={handleDownload}>
                <FaDownload className="btn-icon" />
                Descargar Sistema
              </button>
              <div className="download-info">
                <p>✅ Descarga directa desde Mega</p>
                <p>✅ Instalación automática</p>
                <p>✅ Compatible con Windows 10/11</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PricingCards;

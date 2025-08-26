function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      company: "Tienda El Éxito",
      role: "Gerente General",
      content: "Este sistema transformó completamente nuestro negocio. Antes perdíamos tiempo contando inventario, ahora todo es automático y preciso.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      company: "Distribuidora Central",
      role: "Director de Operaciones",
      content: "La facilidad de uso y los reportes detallados nos han permitido tomar decisiones más inteligentes y aumentar nuestras ventas un 30%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      company: "Supermercado Familiar",
      role: "Propietaria",
      content: "Como pequeña empresa, necesitábamos algo simple pero poderoso. Este sistema es exactamente lo que buscábamos y más.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Descubre por qué miles de empresas confían en nuestro sistema</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-company">{testimonial.company}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHelpItem, setSelectedHelpItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const helpItems = [
    {
      id: 1,
      title: "Nueva Factura con Crédito",
      description: "Aprende a crear facturas con pago a crédito en el sistema",
      gif: "/assets/images/nuevafacturaCredito.gif",
      category: "Facturación",
      tags: ["factura", "crédito", "pago", "como hacer factura", "crear factura", "factura credito", "pago diferido", "cobrar despues", "venta credito"]
    },
    {
      id: 2,
      title: "Nueva Factura con Efectivo",
      description: "Guía para crear facturas con pago en efectivo",
      gif: "/assets/images/nuevafacturaEfectivo.gif",
      category: "Facturación",
      tags: ["factura", "efectivo", "pago", "como hacer factura", "crear factura", "factura efectivo", "pago inmediato", "cobrar ahora", "venta efectivo"]
    },
    {
      id: 3,
      title: "Inicio del Sistema",
      description: "Cómo iniciar y configurar el sistema por primera vez",
      gif: "/assets/images/iniciopv.png",
      category: "Configuración",
      tags: ["inicio", "configuración", "setup", "como empezar", "primera vez", "instalar", "configurar", "empezar a usar", "como usar"]
    },
    {
      id: 4,
      title: "Gestión de Productos",
      description: "Agregar, editar y eliminar productos del inventario",
      gif: "/assets/images/header-bg.jpg",
      category: "Inventario",
      tags: ["productos", "inventario", "gestión", "agregar producto", "editar producto", "eliminar producto", "como agregar", "stock", "mercancia"]
    },
    {
      id: 5,
      title: "Reportes del Sistema",
      description: "Generar y exportar reportes de inventario y ventas",
      gif: "/assets/images/header-bg.jpg",
      category: "Reportes",
      tags: ["reportes", "exportar", "estadísticas", "como hacer reporte", "generar reporte", "ver ventas", "estadisticas ventas", "exportar datos"]
    },
    {
      id: 6,
      title: "Configuración de Usuarios",
      description: "Administrar usuarios y permisos del sistema",
      gif: "/assets/images/header-bg.jpg",
      category: "Administración",
      tags: ["usuarios", "permisos", "admin", "como crear usuario", "agregar usuario", "configurar permisos", "administrar", "accesos"]
    }
  ];

  const filteredItems = helpItems.filter(item => {
    if (!searchTerm.trim()) return true;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const searchWords = searchLower.split(/\s+/); // Dividir en palabras individuales
    
    // Función para verificar si alguna palabra de búsqueda coincide
    const matchesSearch = (text) => {
      const textLower = text.toLowerCase();
      return searchWords.some(word => textLower.includes(word));
    };
    
    // Buscar en título, descripción, categoría y tags
    const titleMatch = matchesSearch(item.title);
    const descriptionMatch = matchesSearch(item.description);
    const categoryMatch = matchesSearch(item.category);
    const tagsMatch = item.tags.some(tag => matchesSearch(tag));
    
    // También buscar coincidencias exactas de frases completas
    const exactMatch = item.title.toLowerCase().includes(searchLower) ||
                      item.description.toLowerCase().includes(searchLower) ||
                      item.category.toLowerCase().includes(searchLower) ||
                      item.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    return titleMatch || descriptionMatch || categoryMatch || tagsMatch || exactMatch;
  });

  const categories = [...new Set(helpItems.map(item => item.category))];

  const openModal = (helpItem) => {
    console.log('Opening modal for:', helpItem);
    setSelectedHelpItem(helpItem);
    setIsModalOpen(true);
    console.log('Modal state:', { selectedHelpItem: helpItem, isModalOpen: true });
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    setSelectedHelpItem(null);
  };

  return (
    <div className="help-page">
      {/* Debug info */}
      <div style={{
        
      }}>
        {/*<div>Modal Open: {isModalOpen ? '✅' : '❌'}</div>
        <div>Selected Item: {selectedHelpItem ? selectedHelpItem.title : 'None'}</div>*/}
      </div> 
      
      <div className="container">
        <div className="help-header">
          <h1>Centro de Ayuda</h1>
          <p>Encuentra respuestas a todas tus preguntas sobre el sistema</p>
          <Link to="/" className="back-link">
            ← Volver al Inicio
          </Link>
          
         
        </div>

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="¿Cómo hacer una factura? ¿Cómo agregar productos? ¿Cómo ver reportes?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              🔍
            </button>
          </div>
          
          {/* Sugerencias de búsqueda populares */}
          {!searchTerm.trim() && (
            <div className="search-suggestions">
              <p className="suggestions-title">Búsquedas populares:</p>
              <div className="suggestion-tags">
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchTerm("como hacer factura")}
                >
                  ¿Cómo hacer una factura?
                </button>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchTerm("agregar producto")}
                >
                  ¿Cómo agregar productos?
                </button>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchTerm("ver reportes")}
                >
                  ¿Cómo ver reportes?
                </button>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchTerm("como empezar")}
                >
                  ¿Cómo empezar a usar?
                </button>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchTerm("crear usuario")}
                >
                  ¿Cómo crear usuarios?
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="categories-section">
          <h3>Categorías</h3>
          <div className="category-tags">
            {categories.map(category => (
              <button
                key={category}
                className={`category-tag ${searchTerm === category ? 'active' : ''}`}
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </button>
            ))}
            <button
              className="category-tag"
              onClick={() => setSearchTerm('')}
            >
              Todas
            </button>
          </div>
        </div>

        <div className="help-content">
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <p>No se encontraron resultados para "{searchTerm}"</p>
              <button 
                className="btn btn-secondary"
                onClick={() => setSearchTerm('')}
              >
                Ver todas las ayudas
              </button>
            </div>
          ) : (
            <div className="help-grid">
              {filteredItems.map(item => (
                <div key={item.id} className="help-card" onClick={() => openModal(item)}>
                  <div className="help-card-image">
                    <img src={item.gif} alt={item.title} />
                  </div>
                  <div className="help-card-content">
                    <h4 className="help-card-title">{item.title}</h4>
                    <p className="help-card-description">{item.description}</p>
                    <div className="help-card-category">{item.category}</div>
                    <div className="help-card-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="help-card-click">
                      <span className="click-text">Click para ver instrucciones</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="contact-support">
          <h3>¿No encuentras lo que buscas?</h3>
          <p>Nuestro equipo de soporte está aquí para ayudarte</p>
          <div className="support-buttons">
            <a href="mailto:soporte@sistemainventario.com" className="btn btn-primary">
              Contactar Soporte
            </a>
            <a href="tel:+15551234567" className="btn btn-secondary">
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        helpItem={selectedHelpItem}
      />
    </div>
  );
}

export default HelpPage;

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
      tags: ["factura", "crédito", "pago"]
    },
    {
      id: 2,
      title: "Nueva Factura con Efectivo",
      description: "Guía para crear facturas con pago en efectivo",
      gif: "/assets/images/nuevafacturaEfectivo.gif",
      category: "Facturación",
      tags: ["factura", "efectivo", "pago"]
    },
    {
      id: 3,
      title: "Inicio del Sistema",
      description: "Cómo iniciar y configurar el sistema por primera vez",
      gif: "/assets/images/iniciopv.png",
      category: "Configuración",
      tags: ["inicio", "configuración", "setup"]
    },
    {
      id: 4,
      title: "Gestión de Productos",
      description: "Agregar, editar y eliminar productos del inventario",
      gif: "/assets/images/header-bg.jpg",
      category: "Inventario",
      tags: ["productos", "inventario", "gestión"]
    },
    {
      id: 5,
      title: "Reportes del Sistema",
      description: "Generar y exportar reportes de inventario y ventas",
      gif: "/assets/images/header-bg.jpg",
      category: "Reportes",
      tags: ["reportes", "exportar", "estadísticas"]
    },
    {
      id: 6,
      title: "Configuración de Usuarios",
      description: "Administrar usuarios y permisos del sistema",
      gif: "/assets/images/header-bg.jpg",
      category: "Administración",
      tags: ["usuarios", "permisos", "admin"]
    }
  ];

  const filteredItems = helpItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(255, 255, 255, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 10000
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
              placeholder="Buscar ayuda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              🔍
            </button>
          </div>
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

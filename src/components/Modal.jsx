import { useEffect } from 'react';
import { FaTimes, FaDownload, FaPlay, FaArrowLeft, FaStar, FaClock, FaBook } from 'react-icons/fa';

function Modal({ isOpen, onClose, helpItem }) {
  console.log('Modal props:', { isOpen, helpItem });
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !helpItem) {
    console.log('Modal not rendering because:', { isOpen, helpItem });
    return null;
  }

  console.log('Modal should be visible now:', { isOpen, helpItem });

  console.log('Modal rendering with:', helpItem);

  const instructions = {
    "Nueva Factura con Crédito": [
      "1. Abre el sistema de inventario",
      "2. Ve al menú 'Facturación'",
      "3. Selecciona 'Nueva Factura'",
      "4. Elige 'Pago a Crédito'",
      "5. Ingresa los datos del cliente",
      "6. Agrega los productos",
      "7. Configura las condiciones de crédito",
      "8. Guarda la factura"
    ],
    "Nueva Factura con Efectivo": [
      "1. Abre el sistema de inventario",
      "2. Ve al menú 'Facturación'",
      "3. Selecciona 'Nueva Factura'",
      "4. Elige 'Pago en Efectivo'",
      "5. Ingresa los datos del cliente",
      "6. Agrega los productos",
      "7. Calcula el total",
      "8. Confirma el pago y guarda"
    ],
    "Inicio del Sistema": [
      "1. Ejecuta el archivo .exe del sistema",
      "2. Espera a que se complete la instalación",
      "3. Abre el programa desde el escritorio",
      "4. En la primera ejecución, crea tu usuario administrador",
      "5. Configura la información de tu empresa",
      "6. Establece la moneda y zona horaria",
      "7. El sistema estará listo para usar"
    ],
    "Gestión de Productos": [
      "1. Ve al menú 'Inventario'",
      "2. Selecciona 'Productos'",
      "3. Para agregar: Click en 'Nuevo Producto'",
      "4. Completa: código, nombre, precio, stock",
      "5. Para editar: Selecciona el producto y click 'Editar'",
      "6. Para eliminar: Selecciona y click 'Eliminar'",
      "7. Guarda los cambios"
    ],
    "Reportes del Sistema": [
      "1. Ve al menú 'Reportes'",
      "2. Selecciona el tipo de reporte",
      "3. Configura el rango de fechas",
      "4. Aplica filtros si es necesario",
      "5. Genera el reporte",
      "6. Exporta en PDF o Excel",
      "7. Imprime si es necesario"
    ],
    "Configuración de Usuarios": [
      "1. Ve a 'Configuración' > 'Usuarios'",
      "2. Click en 'Nuevo Usuario'",
      "3. Completa: nombre, usuario, contraseña",
      "4. Asigna el rol (Admin, Vendedor, etc.)",
      "5. Configura los permisos específicos",
      "6. Guarda el usuario",
      "7. El usuario puede iniciar sesión"
    ]
  };

  const currentInstructions = instructions[helpItem.title] || [];

  const getDifficultyLevel = (title) => {
    const easy = ["Inicio del Sistema", "Gestión de Productos"];
    const medium = ["Nueva Factura con Efectivo", "Reportes del Sistema"];
    const hard = ["Nueva Factura con Crédito", "Configuración de Usuarios"];
    
    if (easy.includes(title)) return { level: "Fácil", color: "#10b981" };
    if (medium.includes(title)) return { level: "Intermedio", color: "#f59e0b" };
    if (hard.includes(title)) return { level: "Avanzado", color: "#ef4444" };
    return { level: "Intermedio", color: "#f59e0b" };
  };

  const getEstimatedTime = (title) => {
    const times = {
      "Inicio del Sistema": "5-10 min",
      "Gestión de Productos": "2-5 min",
      "Nueva Factura con Efectivo": "3-7 min",
      "Nueva Factura con Crédito": "5-10 min",
      "Reportes del Sistema": "3-8 min",
      "Configuración de Usuarios": "5-15 min"
    };
    return times[title] || "5-10 min";
  };

  const difficulty = getDifficultyLevel(helpItem.title);
  const estimatedTime = getEstimatedTime(helpItem.title);

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '1.5rem',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-header-info">
              <h3 className="modal-title">
                {helpItem.title}
              </h3>
              <div className="modal-badges">
                <span className="modal-badge">
                  <FaBook className="modal-badge-icon" />
                  {helpItem.category}
                </span>
                <span className="modal-badge" style={{ color: difficulty.color }}>
                  <FaStar className="modal-badge-icon" />
                  {difficulty.level}
                </span>
                <span className="modal-badge">
                  <FaClock className="modal-badge-icon" />
                  {estimatedTime}
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="modal-close"
            >
              <FaTimes />
            </button>
          </div>
        </div>
        
        {/* Body */}
        <div className="modal-body">
          {/* Image */}
          <div className="modal-image-container">
            <div className="modal-image-wrapper">
              <img 
                src={helpItem.gif} 
                alt={helpItem.title}
                className="modal-image"
              />
            </div>
            <div className="modal-image-overlay">
              <div className="modal-play-button">
                <FaPlay />
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="modal-description">
            <p className="modal-description-text">
              {helpItem.description}
            </p>
          </div>
          
          {/* Instructions */}
          <div className="modal-instructions">
            <h4 className="modal-instructions-title">
              📋 Instrucciones Paso a Paso:
            </h4>
            <ol className="modal-instructions-list">
              {currentInstructions.map((instruction, index) => (
                <li key={index} className="modal-instruction-item">
                  <span className="modal-instruction-number">
                    {index + 1}
                  </span>
                  <span className="modal-instruction-text">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Tags */}
          <div className="modal-tags">
            <h5 className="modal-tags-title">
              Etiquetas relacionadas:
            </h5>
            <div className="modal-tags-list">
              {helpItem.tags.map(tag => (
                <span key={tag} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="modal-footer">
          <button 
            onClick={onClose}
            className="modal-btn modal-btn-secondary"
          >
            <FaArrowLeft />
            Cerrar
          </button>
          <a 
            href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="modal-btn modal-btn-primary"
          >
            <FaDownload />
            Descargar Sistema
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;

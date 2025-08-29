import { useEffect } from 'react';
import { FaTimes, FaDownload, FaPlay, FaArrowLeft, FaStar, FaClock, FaBook } from 'react-icons/fa';
import './Modal.css';

function Modal({ isOpen, onClose, helpItem }) {
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

  if (!isOpen || !helpItem) return null;

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-title-section">
              <h3 className="modal-title">{helpItem.title}</h3>
              <div className="modal-meta">
                <span className="modal-category">
                  <FaBook className="meta-icon" />
                  {helpItem.category}
                </span>
                <span className="modal-difficulty" style={{ color: difficulty.color }}>
                  <FaStar className="meta-icon" />
                  {difficulty.level}
                </span>
                <span className="modal-time">
                  <FaClock className="meta-icon" />
                  {estimatedTime}
                </span>
              </div>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
              <FaTimes />
            </button>
          </div>
        </div>
        
        <div className="modal-body">
          <div className="modal-image-section">
            <div className="modal-image">
              <img src={helpItem.gif} alt={helpItem.title} />
            </div>
            <div className="image-overlay">
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
          </div>
          
          <div className="modal-description">
            <p>{helpItem.description}</p>
          </div>
          
          <div className="modal-instructions">
            <h4>Instrucciones Paso a Paso:</h4>
            <ol className="instructions-list">
              {currentInstructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  <span className="instruction-number">{index + 1}</span>
                  <span className="instruction-text">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="modal-tags">
            <div className="modal-tags-section">
              <h5>Etiquetas relacionadas:</h5>
              <div className="modal-tags-list">
                {helpItem.tags.map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            <FaArrowLeft />
            Cerrar
          </button>
          <a 
            href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
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

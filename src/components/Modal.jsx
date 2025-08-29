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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '1.5rem',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '2rem 2rem 1.5rem',
          borderBottom: '1px solid #e2e8f0',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: '1.5rem 1.5rem 0 0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 1rem 0',
                lineHeight: '1.3'
              }}>
                {helpItem.title}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  padding: '0.5rem 1rem',
                  background: 'white',
                  borderRadius: '2rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0'
                }}>
                  <FaBook style={{ fontSize: '0.875rem', opacity: '0.7' }} />
                  {helpItem.category}
                </span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  padding: '0.5rem 1rem',
                  background: 'white',
                  borderRadius: '2rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  color: difficulty.color
                }}>
                  <FaStar style={{ fontSize: '0.875rem', opacity: '0.7' }} />
                  {difficulty.level}
                </span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  padding: '0.5rem 1rem',
                  background: 'white',
                  borderRadius: '2rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0'
                }}>
                  <FaClock style={{ fontSize: '0.875rem', opacity: '0.7' }} />
                  {estimatedTime}
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '44px',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f1f5f9';
                e.target.style.color = '#1e293b';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'none';
                e.target.style.color = '#64748b';
              }}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        
        {/* Body */}
        <div style={{ padding: '2rem' }}>
          {/* Image */}
          <div style={{
            position: 'relative',
            marginBottom: '2rem',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              width: '100%',
              height: '300px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={helpItem.gif} 
                alt={helpItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0'}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#1e293b',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}>
                <FaPlay />
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: '#f8fafc',
            borderRadius: '1rem',
            borderLeft: '4px solid #3b82f6'
          }}>
            <p style={{
              margin: 0,
              color: '#475569',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              {helpItem.description}
            </p>
          </div>
          
          {/* Instructions */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 1.5rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              📋 Instrucciones Paso a Paso:
            </h4>
            <ol style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {currentInstructions.map((instruction, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  background: 'white',
                  borderRadius: '0.75rem',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(5px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                  e.target.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.borderColor = '#e2e8f0';
                }}
                >
                  <span style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </span>
                  <span style={{
                    color: '#475569',
                    fontWeight: '500',
                    lineHeight: '1.5',
                    flex: 1
                  }}>
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Tags */}
          <div style={{ marginBottom: '1rem' }}>
            <h5 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#64748b',
              margin: '0 0 1rem 0'
            }}>
              Etiquetas relacionadas:
            </h5>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {helpItem.tags.map(tag => (
                <span key={tag} style={{
                  background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
                  color: '#475569',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid #cbd5e1',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #e2e8f0, #cbd5e1)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #f1f5f9, #e2e8f0)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{
          padding: '1.5rem 2rem 2rem',
          borderTop: '1px solid #e2e8f0',
          background: '#f8fafc',
          borderRadius: '0 0 1.5rem 1.5rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.5rem',
              border: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              background: '#64748b',
              color: 'white',
              transition: 'all 0.3s ease',
              minHeight: '44px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#475569';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(100, 116, 139, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#64748b';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <FaArrowLeft />
            Cerrar
          </button>
          <a 
            href="https://mega.nz/file/EkwSBbYI#wcbT_mN9nB8l6AdRTqjcqXBDw7yQnH13wFclj2HaixY" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.5rem',
              border: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              minHeight: '44px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
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

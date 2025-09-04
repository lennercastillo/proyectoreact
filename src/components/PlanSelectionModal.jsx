import { useEffect } from 'react';
import { FaTimes, FaDownload, FaCheckCircle, FaArrowLeft, FaCrown, FaStar } from 'react-icons/fa';

function PlanSelectionModal({ isOpen, onClose, selectedPlan, onConfirm }) {
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

  if (!isOpen || !selectedPlan) {
    return null;
  }

  const handleConfirm = () => {
    onConfirm(selectedPlan);
    onClose();
  };

  const handleDownload = () => {
    window.open('https://mega.nz/file/EkwSBbYI#wcbT_mN9l6AdRTqjcqXBDw7yQnH13wFclj2HaixY', '_blank');
  };

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
        display: 'block',
        zIndex: 9999,
        padding: '0'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '0',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          boxShadow: 'none',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '2rem',
          borderBottom: '1px solid #e2e8f0',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: '0',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
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
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
                         <div style={{
               fontSize: '2rem',
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               color: 'white'
             }}>
               <span>{selectedPlan.icon}</span>
             </div>
            <div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 0.5rem 0',
                lineHeight: '1.3'
              }}>
                {selectedPlan.name}
              </h3>
              <p style={{
                margin: 0,
                color: '#64748b',
                fontSize: '1rem'
              }}>
                {selectedPlan.description}
              </p>
            </div>
          </div>
          
          {selectedPlan.popular && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              <FaCrown />
              ⭐ Más Popular
            </div>
          )}
        </div>
        
        {/* Body */}
        <div style={{ 
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Price */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem',
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '1rem',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '0.5rem'
            }}>
              {selectedPlan.price}
              <span style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#64748b'
              }}>
                /{selectedPlan.period}
              </span>
            </div>
            <div style={{
              fontSize: '1.5rem',
              color: '#10b981',
              fontWeight: '600'
            }}>
              {selectedPlan.savings}
            </div>
          </div>
          
          {/* Features */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 2rem 0',
              textAlign: 'center'
            }}>
              Características incluidas:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '1rem'
            }}>
              {selectedPlan.features.map((feature, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'white',
                  borderRadius: '1rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}>
                  <FaCheckCircle style={{
                    color: '#10b981',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }} />
                  <span style={{
                    color: '#475569',
                    fontWeight: '500',
                    fontSize: '1.125rem'
                  }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{
          padding: '2rem',
          borderTop: '1px solid #e2e8f0',
          background: '#f8fafc',
          borderRadius: '0',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'sticky',
          bottom: 0,
          zIndex: 10
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
            Cancelar
          </button>
          
          <button 
            onClick={handleConfirm}
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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              transition: 'all 0.3s ease',
              minHeight: '44px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #059669, #047857)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #10b981, #059669)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <FaCheckCircle />
            Confirmar Plan
          </button>
          
          <button 
            onClick={handleDownload}
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
            Descargar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanSelectionModal;

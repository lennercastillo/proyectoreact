import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { FaEye, FaUsers } from 'react-icons/fa';
import './LiveViewCounter.css';

function LiveViewCounter() {
  const [viewCount, setViewCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Crear conexión Socket.IO
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    // Obtener contador inicial
    fetch('http://localhost:3001/api/views')
      .then(response => response.json())
      .then(data => setViewCount(data.count))
      .catch(error => console.error('Error obteniendo contador inicial:', error));

    // Escuchar actualizaciones del contador
    newSocket.on('viewCountUpdate', (data) => {
      setViewCount(data.count);
    });

    // Manejar estado de conexión
    newSocket.on('connect', () => {
      setIsConnected(true);
      console.log('Conectado al servidor de contador');
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Desconectado del servidor de contador');
    });

    // Limpiar al desmontar
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <div className="live-view-counter">
      <div className="counter-container">
        <div className="counter-icon">
          <FaEye className={isConnected ? 'connected' : 'disconnected'} />
        </div>
        <div className="counter-content">
          <div className="counter-number">{viewCount.toLocaleString()}</div>
          <div className="counter-label">Vistas en Tiempo Real</div>
          <div className="connection-status">
            <span className={`status-dot ${isConnected ? 'connected' : 'disconnected'}`}></span>
            {isConnected ? 'Conectado' : 'Desconectado'}
          </div>
        </div>
      </div>
      
      <div className="counter-info">
        <FaUsers className="info-icon" />
        <span>Abierto en {viewCount} navegador{viewCount !== 1 ? 'es' : ''}</span>
      </div>
    </div>
  );
}

export default LiveViewCounter;

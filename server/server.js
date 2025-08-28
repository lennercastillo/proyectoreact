const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // URL de tu app React
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Almacenar el contador de vistas
let viewCount = 0;
let activeConnections = new Set();

// Ruta para obtener el contador actual
app.get('/api/views', (req, res) => {
  res.json({ count: viewCount });
});

// Manejar conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');
  
  // Incrementar contador cuando se conecta un nuevo usuario
  viewCount++;
  activeConnections.add(socket.id);
  
  // Enviar el contador actualizado a todos los clientes
  io.emit('viewCountUpdate', { count: viewCount });
  
  // Manejar desconexión
  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
    activeConnections.delete(socket.id);
    
    // Solo decrementar si no hay conexiones activas
    if (activeConnections.size === 0) {
      viewCount = Math.max(0, viewCount - 1);
    }
    
    // Enviar el contador actualizado a todos los clientes
    io.emit('viewCountUpdate', { count: viewCount });
  });
  
  // Enviar el contador actual al cliente que se acaba de conectar
  socket.emit('viewCountUpdate', { count: viewCount });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Contador de vistas iniciado`);
});

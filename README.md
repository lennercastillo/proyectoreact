# Sistema de Página React con Contador de Vistas en Tiempo Real

Este proyecto incluye una aplicación React con un contador de vistas en tiempo real que funciona en múltiples navegadores.

## Características

- **Contador de Vistas en Tiempo Real**: Muestra cuántos navegadores tienen la página abierta
- **Actualizaciones Instantáneas**: Usa WebSockets para sincronización en tiempo real
- **Interfaz Moderna**: Diseño responsive y atractivo
- **Estado de Conexión**: Indica si está conectado al servidor

## Instalación y Configuración

### 1. Instalar dependencias del frontend
```bash
npm install
```

### 2. Instalar dependencias del servidor
```bash
cd server
npm install
```

### 3. Iniciar el servidor de contador
```bash
cd server
npm run dev
```
El servidor se ejecutará en `http://localhost:3001`

### 4. Iniciar la aplicación React
```bash
npm run dev
```
La aplicación se ejecutará en `http://localhost:5173`

## Cómo Funciona

1. **Servidor**: Maneja las conexiones WebSocket y mantiene el contador de vistas
2. **Cliente**: Se conecta al servidor y recibe actualizaciones en tiempo real
3. **Sincronización**: Cada navegador que abre la página incrementa el contador
4. **Tiempo Real**: Los cambios se reflejan instantáneamente en todos los navegadores

## Prueba del Contador

1. Abre la página en un navegador
2. Abre la misma página en otro navegador o pestaña
3. Observa cómo el contador se incrementa en tiempo real
4. Cierra una pestaña y verás cómo el contador se actualiza

## Tecnologías Utilizadas

- **Frontend**: React 19, Vite, Socket.IO Client
- **Backend**: Node.js, Express, Socket.IO
- **Estilos**: CSS3 con animaciones y gradientes
- **Iconos**: React Icons

## Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── LiveViewCounter.jsx    # Contador en tiempo real
│   │   └── LiveViewCounter.css    # Estilos del contador
│   └── App.jsx                    # Aplicación principal
├── server/
│   ├── server.js                  # Servidor de contador
│   └── package.json               # Dependencias del servidor
└── package.json                   # Dependencias del frontend
```

## Notas Importantes

- El servidor debe estar ejecutándose para que el contador funcione
- El contador funciona por conexión activa, no por página vista
- Se recomienda usar `npm run dev` para desarrollo con recarga automática

## Deploy en Vercel

Para hacer deploy en Vercel:

1. **Conectar tu repositorio** a Vercel
2. **Framework Preset**: Seleccionar "Vite"
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

**Nota**: El contador de vistas en tiempo real solo funcionará si tienes el servidor corriendo en un hosting que soporte WebSockets (como Heroku, Railway, o un VPS).

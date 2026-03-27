import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home'; 
import { Login } from './pages/Login';
import { Register } from './pages/Register'; 

// Este es tu "Middleware" de front
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');

  // Si no hay token, lo mandamos al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, mostramos el componente (el "next()" del backend)
  return children;
}

function App() {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas Protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Dashboard (próximamente)</div>
          </ProtectedRoute>
        }
      />

      {/* 404 - Opcional: Redirigir si la ruta no existe */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
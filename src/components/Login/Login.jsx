import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Login.css'; // Importa el archivo CSS
console.log( "El usuario es:  usuario")
console.log( "La contraseña es :  123 ");
export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utiliza useNavigate para la redirección

  const handleLogin = () => {
    if (username === 'usuario' && password === '123') {
      onLogin();
      navigate('/personajes'); // Utiliza navigate para redirigir al usuario
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-header">Iniciar sesión</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Asegúrate de que esta línea esté correctamente escrita
      />
      <input
        className="login-input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Asegúrate de que esta línea esté correctamente escrita
      />
      <button className="login-button" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </div>
    
  );
}
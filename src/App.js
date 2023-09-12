import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Ongs from './components/Ongs/Ongs';
import Login from './components/Login/Login'; // Importa el componente Login
import Unicolugar from './components/Unicolugar/Unicolugar';
import Navbar from './components/Navbar/Navbar';
import Personajes from './components/Personajes/Personajes';
import DetallePersonaje from './components/DetallePersonajes/DetallePersonaje';

function App() {
  // Define el estado loggedIn y la función setLoggedIn
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Login onLogin={() => setLoggedIn(true)} />} />

          {/* Otras rutas de la aplicación */}
          <Route path='/Localizacion' element={<Ongs />} />
          <Route path='/Localizacion/:id' element={<Unicolugar />} />
          <Route path='/Personajes' element={<Personajes />} />
          <Route path='/DetallePersonaje/:id' element={<DetallePersonaje />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
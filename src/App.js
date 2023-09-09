import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Ongs from './components/Ongs/Ongs';
import Login from './components/Login/Login';
import Unicolugar from './components/Unicolugar/Unicolugar';
import Navbar from './components/Navbar/Navbar';
import Personajes from './components/Personajes/Personajes';
import DetallePersonaje from './components/DetallePersonajes/DetallePersonaje';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/Localizacion' element={<Ongs/>}/>
      <Route path='/Localizacion/:id' element={<Unicolugar/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/Personajes' element={<Personajes></Personajes>}></Route>
      <Route path='/DetallePersonaje/:id' element={<DetallePersonaje></DetallePersonaje>}></Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;

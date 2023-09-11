import React from 'react'

import { Link } from 'react-router-dom';
import './TarjetasPersonajes.css';
export default function TarjetasPersonajes({Data}) {
  return (
    <div className='classTarjeta'>
    <h2><Link to={`/DetallePersonaje/${Data.id}`}>{Data.name}</Link></h2>
      
      <h2>Años Del Personaje: {Data.age}</h2>
      
    </div>
  );
}



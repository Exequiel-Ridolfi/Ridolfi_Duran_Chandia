import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetPersonajes } from '../../api';
import Navbar from '../Navbar/Navbar';
import './DetallePersonaje.css';

const DetallePersonaje = () => {
  const [detallePersonaje, setDetallePersonaje] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPersonajes();
        const personaje = data.find((p) => p.id === parseInt(params.id));
        setDetallePersonaje(personaje || {}); // Si no se encuentra, establece un objeto vacío
      } catch (error) {
        console.error('Error al obtener el Personaje', error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <>
     <div className="container details h2  navbar return-link   ">
     <Navbar />
      <h2>Nombre del personaje: {detallePersonaje.name}</h2>
      <h2>Genero del personaje: {detallePersonaje.gender}</h2>
      <h2>Estado del personaje: {detallePersonaje.occupation}</h2>
      <h2>Estado del personaje: {detallePersonaje.species}</h2>
      </div>
      {/* Aquí puedes mostrar otros detalles del personaje */}
    </>
    
  );
};

export default DetallePersonaje;

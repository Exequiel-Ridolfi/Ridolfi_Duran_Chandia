import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetPersonajes } from '../../api';
import Navbar from '../Navbar/Navbar';
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
     <Navbar />
      <h2>Nombre del personaje: {detallePersonaje.name}</h2>
      <h2>Genero del personaje: {detallePersonaje.gender}</h2>
      <h2>Estado del personaje: {detallePersonaje.occupation}</h2>
      <h2>Estado del personaje: {detallePersonaje.species}</h2>

      {/* Aquí puedes mostrar otros detalles del personaje */}
    </>
  );
};

export default DetallePersonaje;

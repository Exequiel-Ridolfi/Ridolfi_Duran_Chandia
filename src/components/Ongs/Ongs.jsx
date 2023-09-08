
import React, {useState,useEffect } from 'react'
import { GetLocalizacion } from '../../api'
import TarjetasOng from '../TarjetasOng/TarjetasOng';
import Navbar from '../Navbar/Navbar';
export default function Ongs() {
    GetLocalizacion()
    const [Ong, setOng] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetLocalizacion();
            console.log(data)
            setOng(data);
          } catch (error) {
            console.error('Error al obtener las Organizaciones', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    
    <div>
      <Navbar/>
      {Ong.map((Ong)=>(<TarjetasOng key={Ong.id} Data={Ong}/>))}
    </div>
  )
}

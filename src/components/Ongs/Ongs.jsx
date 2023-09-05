
import React, {useState,useEffect } from 'react'
import { GetOng } from '../../api'
import TarjetasOng from '../TarjetasOng/TarjetasOng';
export default function Ongs() {
    GetOng()
    const [Ong, setOng] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetOng();
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
      {Ong.map((Ong)=>(<TarjetasOng key={Ong.id} Data={Ong}/>))}
    </div>
  )
}

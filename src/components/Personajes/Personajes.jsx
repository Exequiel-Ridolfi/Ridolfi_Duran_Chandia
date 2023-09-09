import { GetPersonajes } from '../../api'
import {useState,useEffect}from 'react' 
import Navbar from '../Navbar/Navbar';
import TarjetasPersonajes from '../TarjetasPersonajes/TarjetasPersonajes' ;

export default function Personajes() {
   
    const [Personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetPersonajes();
            setPersonajes(data);
          } catch (error) {
            console.error('Error al obtener los Personajes', error);
          }
        };
    
        fetchData();
        
      }, []);
     
  return (
    
   <div>
      <Navbar />
    {Personajes.map((Personaje) => (
                <div key={Personaje.id}>
                    <TarjetasPersonajes Data={Personaje} />
                   
                </div>
            ))}
       </div>
  );
}

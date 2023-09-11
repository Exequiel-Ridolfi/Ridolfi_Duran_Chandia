import React, {useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom'
import { GetLocUni } from '../../api'
import './Unicolugar.css';
export default function Unicolugar() {
    
    const [unicolugar,setUnicolugar] = useState();
    const param =useParams()
    useEffect(()=>{
        GetLocUni(param.id,setUnicolugar);
    },[])
  return (

    <><Navbar/><>
    <div className="container details h2  navbar return-link   ">
      {unicolugar != null ? (
        <div>
          <h2>Nombre de localizacion: {unicolugar.name}</h2>
          <h2>Region del lugar:{unicolugar.region}</h2>
          <h2>Nombre del territorio: {unicolugar.territory}</h2>
        </div>

      ) : ("Espera")}
       </div>
    </></>
   
  )
}

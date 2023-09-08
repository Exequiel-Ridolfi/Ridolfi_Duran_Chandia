import React, {useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom'
import { GetLocUni } from '../../api'
export default function Unicolugar() {
    
    const [unicolugar,setUnicolugar] = useState();
    const param =useParams()
    useEffect(()=>{
        GetLocUni(param.id,setUnicolugar);
    },[])
  return (
    <><Navbar/><>
      {unicolugar != null ? (
        <div>
          <h2>{unicolugar.name}</h2>
          <h2>{unicolugar.region}</h2>
          <h2>{unicolugar.territory}</h2>
        </div>
      ) : ("Espera")}
    </></>
  )
}

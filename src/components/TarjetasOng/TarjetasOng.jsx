import React from 'react'
import "./TarjetasOng.css"
export default function TarjetasOng({Data}) {
  return (
    <div className='classTarjeta'>
      <h2>{Data.name}</h2>
      <h4>{Data.territory}</h4>
    </div>
  );
}

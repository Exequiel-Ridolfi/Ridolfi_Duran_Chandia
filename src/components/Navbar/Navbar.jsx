import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className=' Navbar'>
    <NavLink to='/Personajes' className='Buton'>Personajes</NavLink>
    <NavLink to='/Localizacion' className='Buton'>Localizaciones</NavLink>
    <NavLink to='/' className='Buton'>Salir</NavLink>
  </nav>
  )
}

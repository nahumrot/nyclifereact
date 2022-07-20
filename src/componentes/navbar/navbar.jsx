import React from 'react'

const navbar = () => {
  return (
    <div className='NavBar'>
        <div className='marca'>
            <logo/>
            <titulo></titulo>
        </div>
        <div className='navbar_menu'>
            <div>
                <button className='navbra_button'>Inicio</button>
                <button className='navbra_button'>Productos</button>
                <button className='navbra_button'>Historia</button>
                <button className='navbra_button'>Contacto</button>
                <button className='navbra_button'>Nombre</button>
            </div>
        </div>
    </div>
  )
}

export default navbar
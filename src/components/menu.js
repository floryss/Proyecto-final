import React from 'react'
import './menu.css'
import Logo from '../assets/logo.png'

function Menu() {
  return (
    <div>
    <div className="contenedor">
        <header>
          <img className='logo'src={Logo} alt=''/>
            <h1>Museo</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Obras</a></li>
                    <li><a href="#">Nueva obras</a></li>
                </ul>
            </nav>
        </header>
      </div>
    </div>
  )
}

export default Menu


import React from 'react'
import'./final.css'

function Final() {
  return (
    <div className='footer'>
        <div className="contenido">
            <div className="col">
                <h3>Horario General:</h3>
                <ul>
                    <li><a href="#">Martes a Viernes: 8:30 a. m. - 4:30 p. m</a></li>
                    <li><a href="#">Sábados y Domingos: 9:00 a. m. - 5:00 p. m</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Contacto:</h3>
                <ul>
                    <li><a href="#">Teléfono: +(506) 2258-4929</a></li>
                    <li><a href="#">WhatsApp: +(506) 70037070</a></li>
                    <li><a href="#">Correo: info@museocr.org</a></li>
                </ul>
            </div>
            <div className="col3">
                    <p>Seguime!</p>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                
            </div>
        </div>
    </div>

  )
}

export default Final
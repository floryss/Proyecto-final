import React from 'react'
import './obras.css'
import Grabado from '../assets/1.jpg'
import Tinta from '../assets/2.jpg'
import Textura from '../assets/3.jpg'
import Espox from '../assets/exposicion.jpg'

function Obras() {
  return (
      <div id="clientes">
        <div className="contenido">
            <div className="fila">
                <div className="col">
                    <div className="circulo-principal"></div>
                    <img src={Espox} alt=""/>
                </div>
                <div className="col col-historia">
                    <h2 className="titulo-seccion">OBRAS DE</h2>
                     <h3 class="resaltado-subir"> Arte ala venta</h3>
                     <div className="cliente">
                        <img src={Grabado} alt=""/>
                        <div className="info-cliente">
                            <h3>Jose Marin.</h3>
                            <h5>Descripcion:</h5>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <p>año: 2001</p>
                        </div>
                      </div>
                      <div className="cliente">
                        <img src={Tinta} alt=""/>
                        <div className="info-cliente">
                            <h3>Ana Sanchez.</h3>
                            <h5>Descripcion:</h5>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <p>año: 2001</p>
                        </div>
                      </div>
                      <div className="cliente">
                        <img src={Textura} alt=""/>
                        <div className="info-cliente">
                            <h3>Lucas R.</h3>
                            <h5>Descripcion:</h5>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <p>año: 2009</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        </div>
    
    
    
  )
}

export default Obras
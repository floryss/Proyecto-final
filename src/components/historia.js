import React from 'react'
import './historia.css'

function Historia() {
  return (
    <div>
      <section id="curriculum" class="curriculum">
        <div className="contenido-seccion">
            <h2>Museo</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Museo de los Niños</h3>
                    <div className="item izq">
                        <h4>Contexto Historico</h4>
                        
                        <span className="fecha">1990-1994</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Gestando el sueño</h4>
                        <span className="casa">Historia</span>
                        <span className="fecha">1993</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Las salas del museo</h4>
                        <span className="casa">Museo de los Niños</span>
                        <span className="fecha">2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div className="col derecha">
                    <h3>Galería Nacional</h3>
                    <div className="item der">
                        <h4>Arte</h4>
                        
                        <span className="fecha">2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Exposiciones</h4>
                      
                        <span className="fecha">2005 - 2008</span>
                        <p>La Galería Nacional es todo un referente del arte visual costarricense, convirtiéndose sus exposiciones en las más importantes de Costa Rica</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>TEATRO</h4>
                        <span className="casa">ARTE</span>
                        <span className="fecha">2005 - 2008</span>
                        <p>Dentro de sus exposiciones podrás encontrar colecciones de los más dispares y lúdicas. A lo largo de sus catorces salas podrás disfrutar y admirar las obras de los mejores artistas del momento, tanto a nivel nacional como internacional. Entre las obras expuestas podrás encontrar géneros como el fotográfico, arte digital o pintura, entre muchos otros.</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 </div>
  )
}

export default Historia
import React from 'react'
import './carosuel.css'
//import Pared from '../assets/pared.jpg'
import Te from '../assets/8.jpg'
import To from '../assets/9.jpg'
import  Ca from '../assets/10.jpg'

function Carosuel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
       <div class="carousel-item active">
         <img class="d-block w-100" src={To} alt="First slide"/>
       </div>
       <div class="carousel-item">
         <img class="d-block w-100" src={Te} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Ca} alt="Second slide"/>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carosuel
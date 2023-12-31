import React from 'react'
import'./producto.css'

import Grabado from '../assets/1.jpg'
import Tinta from '../assets/3.jpg'
import Textura from '../assets/2.jpg'
import Espox from '../assets/exposicion.jpg'

function producto() {
  return (
    <div className='container-fluid'>
        <div class="row">
          <div class="col">
            <h3>OBRAS de arte </h3>
            <div className='informa'>
               <ul class="list-unstyled">
                 <li class="media">
                   <img class="mr-3" src={Grabado}  alt="Generic placeholder image"/>
                   <div class="media-body">
                     <h5 class="mt-0 mb-1">List-based media object</h5>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                 </li>
                 <li class="media my-4">
                   <img class="mr-3" src={Tinta}  alt="Generic placeholder image"/>
                   <div class="media-body">
                     <h5 class="mt-0 mb-1">List-based media object</h5>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                 </li>
                 <li class="media">
                   <img class="mr-3" src={Textura}  alt="Generic placeholder image"/>
                   <div class="media-body">
                     <h5 class="mt-0 mb-1">List-based media object</h5>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                   </div>
                 </li>
               </ul> 
            </div>      
           </div>
         
          </div>
        </div>
    
  )
}

export default producto
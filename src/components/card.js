import React from 'react'


function Card({title,imageSource}) {
 
  return (
    
    <div className='card bg-dark'>
        <img src={imageSource}  class="card-img-top" alt=''/>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-outline-secondary rounded-0">Go somewhere</a>

        </div>
    </div>
  )
}

export default Card
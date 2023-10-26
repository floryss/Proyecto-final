import React from 'react'
import Card from './card'

import './cards.css'

import Grabado from '../assets/carboncillo.jpg'
import Digital from '../assets/digital.jpg'
import Oleo from '../assets/plumilla.jpg'

const cards = [
    {
        id: 1,
        title: 'Carboncillo',
        image: Grabado
    },
    {
        id: 2,
        title: 'Diseño Digital',
        image: Digital
    },
    {
        id: 3,
        title: 'Pintura ',
        image: Oleo
    },
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100 '>
     <h1>obras de arte segun la tecnica </h1>
        <div className='row'>
           {
            cards.map(card=>(
                <div className='col-md-4' key={card.id}>
                  <Card title={card.title} imageSource={card.image}/>
               </div>
            ))
           }
            
        </div>
    </div>
  )
}

export default Cards
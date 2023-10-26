import React from 'react'
import Carosuel from './components/carosuel'
import Cards from './components/cards'
import Menu from './components/menu'
import Historia from './components/historia'
import Obras from './components/obras'
import Final from'./components/final'

import './App.css'

function App() {
  return (
    <div>
      <div className='App'>
       <Menu/>
       <Carosuel/>
       <Cards/>
       <Historia/>
       <Obras/>
       <Final/>
      </div>
       
    </div>
  )
}

export default App
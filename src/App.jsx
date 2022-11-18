import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Escudo_DEVIF from "./assets/images/Escudo_DEVIF.png"
import Escudo_PPNN2 from "./assets/images/Escudo_PPNN2.png"

import './App.css'

function App() {


  return (
    <div className="App">
      <header>
        <div className='header'>
          <img src={Escudo_PPNN2} alt="Escudo Policía Nacional del Ecuador" />
          <h1>UNIDAD NACIONAL DE INVESTIGACIÓN COTRA LA VIOLENCIA DE GÉNERO,  <br /> MUJER O MIEMBROS DEL NÚCLEO FAMILIAR</h1>
          <img src={Escudo_DEVIF} alt="" />
        </div>
        <nav>
          <ul className='ul-header'>
            <li className='li-header'>Inicio</li>
            <li className='li-header'>Acerca del Devif</li>
            <li className='li-header'>Qué hacer si eres víctima</li>
            <li className='li-header'></li>
          </ul>
        </nav>
      </header>

    </div>
  )
}

export default App

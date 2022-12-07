import React from 'react';
import Escudo_DEVIF from "../assets/images/Escudo_DEVIF.png"
import Escudo_PPNN2 from "../assets/images/Escudo_PPNN2.png"
import { useNavigate } from "react-router-dom";

const MyNav = () => {
    const navigate = useNavigate()
    return (
        <div>
           
      <header>
        <div className='header'>
          <img className='img-header' src={Escudo_PPNN2} alt="Escudo Policía Nacional del Ecuador" />
          <h1>UNIDAD NACIONAL DE INVESTIGACIÓN COTRA LA VIOLENCIA DE GÉNERO,  <br /> MUJER O MIEMBROS DEL NÚCLEO FAMILIAR</h1>
          <img className='img-header' src={Escudo_DEVIF} alt="" />
        </div>
        <nav>
          <ul className='ul-header'>
            <li onClick={() => navigate(`/`)} className='li-header'>Inicio</li>
            <li onClick={() => navigate(`/devif`)} className='li-header'>Acerca del Devif</li>
            <li onClick={() => navigate(`/victima`)} className='li-header'>Qué hacer si eres víctima</li>
            <li className='li-header'></li>
          </ul>
        </nav>
      </header>
        </div>
    );
};

export default MyNav;
import React from 'react';
import Escudo_DEVIF from "../assets/images/Escudo_DEVIF.png";
import FAMILIA from "../assets/images/FAMILIA.png"

const Home = () => {
    return (
        <div className='home'>
            <div>
                <div className='home-content'>
                    <div className='home-title-content'>
                        <h2 className='home-title'>D E V I F</h2>
                        <h3 className='home-subtitle'>Unidad Nacional de Investigación Contra la Violencia de Género, Mujer o Miembros del Núcleo Familiar</h3>
                        <img className='home-title-img' src={FAMILIA} alt="" />
                    </div>
                    <div className='home-image'>
                    <img src={Escudo_DEVIF} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
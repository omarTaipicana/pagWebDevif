import React from 'react';

const MyFooter = () => {
    return (
        <div className='footer'>
            <footer className='footer-content'>
                <div className='footer-item'>
                    <a className='footer-link' href="https://goo.gl/maps/TJBmoEU8ArzgAhYj8" target="_blank">  <i className="fa fa-location-dot"></i>
                        <b>  Dirección :</b> Avenida Eloy Alfaro y Juan Molineros</a>
                </div>
                <div className='footer-item'>
                    <a className='footer-link' href="mailto:devif.secretraria@gmail.com"> <b>Correo electrónico:</b>  devif.secretraria@gmail.com</a>
                </div>

            </footer>
        </div>
    );
};

export default MyFooter;
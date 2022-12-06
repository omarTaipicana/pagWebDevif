import React from 'react';

const MyFooter = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='footer-item'>
                    <a className='footer-link' href="https://goo.gl/maps/TJBmoEU8ArzgAhYj8" target="_blank">  <i class="fa fa-location-dot"></i>
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
import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='containerMain'>
        <div className='containerBox'>
            <div className='contInfo'>
                <h1>Alex Diaz Vera</h1>
                <h3>Desarrollador Front-end</h3>
                <p>Bienvenidos a mi portafolio donde encontraran todos mis proyectos, las tecnologias que manejo son react, javascript, html, css</p>

                <div>
                <button className='btn buttonHeader btnActive'>Get started</button>
                <button className='btn buttonHeader'>Contacto</button>
                </div>

            </div>

            <div className='contImg'>
                <img src="./img/imgPortafolio2.png" alt="" />
            </div>
           
            
        </div>
        </div>
    );
}

export default Header;

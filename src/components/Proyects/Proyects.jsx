import React from 'react';
import './proyects.css'

const Proyects = () => {
    return (
        <div id='proyects'>
            <div className='containerMainProyects bg-pan-top'>
                <div className='poyectsTitle'>
                    <h2>Proyectos</h2>
                </div>
                <div className='proyectsList'>
                    <div className='proyect'></div>
                    <div className='proyect'></div>
                    <div className='proyect'></div>
                </div>
                <button className='btn verMasButton'>Ver otros proyectos...</button>
            </div>
        </div>
    );
}

export default Proyects;

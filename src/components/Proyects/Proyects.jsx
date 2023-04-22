import React from 'react';
import './proyects.css'

const Proyects = () => {
    return (
        <div id='proyects'>
            <div className='containerMainProyects bg-pan-top'>
                <div className='poyectsTitle'>
                    <h2>Proyectos</h2>
                </div>
                <div class="contenedor">
            <div className='contenedorProyectos'>
         <a href="#">
              <figure>
                  <img src="./img/proyects/proyect1.png"/>
                  <div className="capa">
                      <h3>Proyecto</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                      <a href="https://github.com/" target='_blank'><button className='btn'>Demo <i className="bi bi-play-fill"></i></button></a>
                      <a href="https://github.com/" target='_blank'><button className='btn'>Github <i className="bi bi-github"></i></button></a>
                  </div>
              </figure>
          </a>
          <div>
            <a href="https://github.com/" target='_blank'><button className='btn buttonsProyect'>Demo <i className="bi bi-play-fill"></i></button></a>
            <a href="https://github.com/" target='_blank'><button className='btn buttonsProyect'>Github <i className="bi bi-github"></i></button></a>
          </div>
          </div>
          <div className='contenedorProyectos'>
         <a href="#">
              <figure>
                  <img src="./img/proyects/proyect2.png"/>
                  <div className="capa">
                      <h3>Proyecto</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                      <a href="https://github.com/" target='_blank'><button className='btn'>Demo <i className="bi bi-play-fill"></i></button></a>
                      <a href="https://github.com/" target='_blank'><button className='btn'>Github <i className="bi bi-github"></i></button></a>
                  </div>
              </figure>
          </a>
          <div>
            <a href="https://github.com/" target='_blank'><button className='btn buttonsProyect'>Demo <i className="bi bi-play-fill"></i></button></a>
            <a href="https://github.com/" target='_blank'><button className='btn buttonsProyect'>Github <i className="bi bi-github"></i></button></a>
          </div>
          </div>
          <div className='contenedorProyectos'>
         <a href="#">
              <figure>
                  <img src="./img/proyects/proyect1.png"/>
                  <div className="capa">
                      <h3>Proyecto</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                      <a href="https://github.com/" target='_blank'><button className='btn'>Demo <i className="bi bi-play-fill"></i></button></a>
                      <a href="https://github.com/" target='_blank'><button className='btn'>Github <i className="bi bi-github"></i></button></a>
                  </div>
              </figure>
          </a>
          <div>
            <a href="https://github.com/" target='_blank'><button className='btn buttonsProyect'>Demo <i className="bi bi-play-fill"></i></button></a>
            <a href="https://github.com/" target='_blank'><button className='btn buttonsProyect'>Github <i className="bi bi-github"></i></button></a>
          </div>
          </div>
      </div>
                <button className='btn verMasButton'>Ver otros proyectos...</button>
            </div>
        </div>
    );
}

export default Proyects;

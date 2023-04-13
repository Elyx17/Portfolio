import React from 'react';
import './navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbarContainer">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navbarPortfolio" id="navbarColor01">
            <ul className="navbar-nav">
              <li>
                <a className="nav-link active" href="#">Proyectos</a>
              </li>
              <li>
                <a className="nav-link" href="#">Tecnologías</a>
              </li>
              <li>
                <a className="nav-link" href="#">Sobre mí</a>
              </li>
              <li>
                <a className="nav-link" href="#"><i className="bi bi-github"></i></a>
              </li>
              <li>
                <a className="nav-link" href="#"><i className="bi bi-linkedin"></i></a>
              </li>
            </ul>
            <div>
                <button className='btn button'>Descargar cv <i class="bi bi-download"></i></button>
            </div>
          </div>
        </div>
      </nav>      
    );
}

export default Navbar;

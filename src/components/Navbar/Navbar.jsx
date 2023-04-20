import React from 'react';
import './navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbarContainer">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navbarPortfolio" id="navbarColor03">
            <ul className="navbar-nav listNavItems">
              <li>
                <a className="nav-link" href="#proyects">Proyectos</a>
              </li>
              <li>
                <a className="nav-link" href="#technologies">Tecnologias</a>
              </li>
              <li>
                <a className="nav-link" href="#">Sobre mi</a>
              </li>
              <li>
                <a className="nav-link navIcons" href="#"><i className="bi bi-github"></i></a>
              </li>
              <li>
                <a className="nav-link navIcons" href="#"><i className="bi bi-linkedin"></i></a>
              </li>
            </ul>
            <div className='downloadButton'>
                <a download='cvDesarrolladorAlexDiaz' href='./img/icons/vscode.png'>
                <button className='btn buttonDownload'>Descargar cv <i className="bi bi-cloud-arrow-down-fill downloadIcon"></i></button>  
                </a>
            </div>
          </div>
        </div>
      </nav>      
    );
}

export default Navbar;

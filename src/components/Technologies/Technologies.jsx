import React from 'react';
import './technologies.css'

const Technologies = () => {
    return (
        <div className='containerMainTech'>
            <div className='tech'>
                <div>
                    <h3>Desarrollo Fronted</h3>
                </div>
                <div className='frontIcons'>
                    <img src="./img/icons/html5.png" alt="css" />
                    <img src="./img/icons/css.png" alt="css" />
                    <img src="./img/icons/javascript.png" alt="css" />
                    <img src="./img/icons/react.png" alt="css" />
                    <img src="./img/icons/sass.png" alt="css" />
                    <img src="./img/icons/bootstrap.png" alt="css" />
                    <img src="./img/icons/tailwind.png" alt="css" />
                    
                </div>
                
            </div>

            <div className='techbouble'>
                <div className='techDos'>
                <div>
                    <h3>Herramientas</h3>
                </div>
                <div className='frontIcons'>
                    <img src="./img/icons/vscode.png" alt="css" />
                    <img src="./img/icons/git.png" alt="css" />
                    <img src="./img/icons/github.png" alt="css" />
                    
                </div>
                </div>

                <div className='techDos'>
                <div>
                    <h3>Base de datos NoSQL</h3>
                </div>
                <div className='frontIcons'>
                    <img src="./img/icons/firebase.png" alt="css" />  
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default Technologies;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import './style.css';



export default function Header() {
    const NameUser = localStorage.getItem('UserName');

    return (
        <>
            <header className="header--nova">
               <div className="menu-h">
                <nav>
                    <ul className="menu-h">
                        <li><Link to="/dashPF"> DashBoard</Link></li>
                        <li><Link to="/endPF"> Atualizar Cadastro</Link></li>
                        <li><Link to="/"> Sair</Link></li>
                    </ul>
                </nav> 
                </div> 
                <div className="entrada">
                    <p>Seja bem vindo, {NameUser}</p>
                </div>

                </header>        
           </>
    )

}

import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

export default function Header() {
    const RespCompany = localStorage.getItem('CompanyResp');


    return (
        <>
            
            <header className="header--nova">
               <div className="menu-h">
                    <nav>
                        <ul>
                            <li><Link to="/dashPJ"> DashBoard</Link></li>
                            <li><Link to="/setores"> Setores</Link></li>
                            <li><Link to="/device"> Dispositivos</Link></li>
                            <li><Link to="/equips"> Equipamentos</Link></li>
                            <li><Link to="/"> Sair</Link></li>
                        </ul>
                    </nav>                
                </div> 
                <div className="entrada">
                    <p>Seja bem vindo, {RespCompany} </p>
                </div>

            </header>        
           </>
    )

}

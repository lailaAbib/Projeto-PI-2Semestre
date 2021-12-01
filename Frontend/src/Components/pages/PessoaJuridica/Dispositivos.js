import React, { useState, useEffect } from 'react';
import api from '../../../services/api/api';
import { Link } from 'react-router-dom';
import Table from '../../tabelas/TabelaDevice';

import './geralPJ.css';


import Header from '../../Header/HeaderEmpresa';



export default function Home() {
    const [device, setDevice] = useState([]);


    useEffect(()=> {
        api.get('device').then(response => setDevice(response.data));
    }, []);

    return (
    <>
            <Header />
            <div className="head">
            </div>

        <section className="sectionTable" >
            <div className="menu-tabela">
                <h2>Cadastro de Dispositivos</h2>
                <Link to="/device/0" value={'I'}>incluir Novo Dispositivo</Link>
            </div>
                <Table 
                    item1="codigo"
                    item2="Dispositivo"
                    items={device}
                    nav={"/device/"}
                />
        </section>
    </>
);
};
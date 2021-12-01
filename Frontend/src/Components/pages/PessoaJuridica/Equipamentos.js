import React, { useState, useEffect } from 'react';
import api from '../../../services/api/api';
import { Link } from 'react-router-dom';
import Table from '../../tabelas/TabelaEquips';

import './geralPJ.css';


import Header from '../../Header/HeaderEmpresa';



export default function Home() {
    const [equipment, SetEquipment] = useState([]);


    useEffect(()=> {
        api.get('equipment').then(response => SetEquipment(response.data));
    }, []);

    return (
    <>
            <Header />
            <div className="head">
            </div>

        <section className="sectionTable" >
            <div className="menu-tabela">
                <h2>Cadastro de Equipamentos</h2>
                <Link to="/equips/0" value={'I'}>incluir Novo Equipamento</Link>
            </div>
                <Table 
                    item1="codigo"
                    items={equipment}
                    nav={"/equips/"}
                />
        </section>
    </>
);
};
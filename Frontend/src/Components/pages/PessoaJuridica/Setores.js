import React, { useState, useEffect } from 'react';
import api from '../../../services/api/api';
import { Link } from 'react-router-dom';
import Table from '../../tabelas/TabelaSetores';

import './geralPJ.css';


import Header from '../../Header/HeaderEmpresa';



export default function Home() {
    const [setor, setSetor] = useState([]);


    useEffect(()=> {
        api.get('department').then(response => setSetor(response.data));
    }, []);


    return (
    <>
            <Header />
            <div className="head">
            </div>

        <section className="sectionTable" >
            <div className="menu-tabela">
                <h2>Cadastro de Setores</h2>
                <Link to="/setores/0" value={'I'}>incluir Novo Setor</Link>
            </div>
                <Table 
                    item1="codigo"
                    item2="Setor"
                    items={setor}
                    nav={"/setores/"}
                />
        </section>
    </>
);
};
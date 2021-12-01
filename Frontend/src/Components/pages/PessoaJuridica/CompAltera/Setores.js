import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import './style.css';

import api from '../../../../services/api/api';

import Header from '../../../Header/HeaderEmpresa';



export default function EditaSetores() {
    const IdCompany = localStorage.getItem('CompanyID');

    const history = useHistory();
    const [nome, setNome] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [checked, setChecked] = useState(true);
    const [nomePag, setNomePag] = useState(false);
    const [idBoolean, setBoolean] = useState(false);

    const { codigo } = useParams();


    function IfCrud() {
       let nomeCampo = ''; 
      if(codigo == 0) {
        nomeCampo= 'Inclusão de Setor';
        setBoolean(true);
    } else {
        nomeCampo= 'Alteração de Setor';
        setBoolean(false);
    }       
    setNomePag(nomeCampo);
    }

    useEffect(()=> {

    IfCrud();
    getDevices();
    }, []);


    async function getDevices() {

        try {
            
            if(idBoolean) {
                setChecked(true);
            } else {
                  var response = await api.get('/department/' + codigo);
                  var data = response.data;
                  setNome(data.nomeSetor);
                  setResponsavel(data.responsavel); 
        
                if(data.AtivoInativo == 'A') {
                    setChecked(true);
                } else {
                    setChecked(false);
                }       
        
            } 
        } catch (error) {
        }

        }    
    


    function toggle() {
        setChecked(!checked)
    }

    async function handledepartment(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if(checked) {
            data.AtivoInativo = 'A'
        } else {
            data.AtivoInativo = 'I'            
        }
        console.log(data);

            try {
                if(nome.length === 0) {
                    alert('Insira um nome válido')
                } else {
                    if(idBoolean) {
                        data.CodPk_empresa = IdCompany; 
                        await api.post('department', data);
                    } else {
                        await api.put('/department/' + codigo, data);                        
                    }

                    history.push('/setores');
                } 
        
            } catch (error) {
                alert('Erro no cadastro, tente novamente.')                
            }
    }


    return (
        <>
        <Header />
        <div className="head">
        </div>

    <section className="sectionTable" >
        <div className="menu-tabela">
            <h2>{nomePag}</h2>
        </div>
        <form className="form--edit" onSubmit={handledepartment} >
        <div className="row--marca">
            <label >Setor</label>
            <input type="text"
                   name="nomeSetor" 
                   placeholder="nome do Setor"
                   value={nome}
                   onChange= {e => setNome(e.target.value)}
                   />
        </div>
        <div className="row--marca">
            <label >Responsavel</label>
            <input type="text"
                   name="responsavel" 
                   placeholder="nome do responsável"
                   value={responsavel}
                   onChange= {e => setResponsavel(e.target.value)}
                   />
        </div>
        <div className="row--mark-check">
        <label htmlFor="AtInEditado">
            <input type="checkbox" 
                   name="AtivoInativo" 
                   id="AtInEditado"
                   checked={checked}
                   onClick= {e => toggle()}                           
                   /><span>Ativo</span>
            </label>
        </div>                   
        <div className="row--marks--buttons">
            <button type="submit" className="button-save-marca">Salvar</button>
            <Link to="/setores" className="button-return-marca" >Voltar</Link>
        </div>
        </form>

    </section>
</>

    )
}




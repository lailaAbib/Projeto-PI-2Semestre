import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import './style.css';

import api from '../../../../services/api/api';

import Header from '../../../Header/HeaderEmpresa';



export default function EditaDispositivo() {
    const IdCompany = localStorage.getItem('CompanyID');
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [checked, setChecked] = useState(false);
    const [nomePag, setNomePag] = useState(false);
    const [idBoolean, setTipoCrud] = useState(false);

    const { codigo } = useParams();


    function IfCrud() {
       let nomeCampo = ''; 
      if(codigo == 0) {
        nomeCampo= 'Inclusão de Dispositivo';
        setTipoCrud(true);
    } else {
        nomeCampo= 'Alteração de Dispositivo';
        setTipoCrud(false);
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
                  var response = await api.get('/device/' + codigo);
                  var data = response.data;
                  setNome(data.nome); 
        
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

    async function handleDevice(e) {
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
                    await api.post('device', data);
                    } else {
                    await api.put('/device/' + codigo, data);                        
                    }

                    history.push('/device');
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
        <form className="form--edit" onSubmit={handleDevice} >
        <div className="row--marca">
            <label >Dispositivo</label>
            <input type="text"
                   name="nome" 
                   placeholder="nome do dispositivo"
                   value={nome}
                   onChange= {e => setNome(e.target.value)}
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
            <Link to="/device" className="button-return-marca" >Voltar</Link>
        </div>
        </form>

    </section>
</>

    )
}




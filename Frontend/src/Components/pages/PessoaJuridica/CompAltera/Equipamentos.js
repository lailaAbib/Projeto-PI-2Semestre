import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import './style.css';

import api from '../../../../services/api/api';

import Header from '../../../Header/HeaderEmpresa';



export default function EditaEquipamento() {
    const history = useHistory();
    const [listaSetores, setListaSetores] = useState([]);
    const [listaDispositivo, setListaDispositivo] = useState([]);

    const [dispositivo, setDispositivo] = useState(0);
    const [setor, setSetor] = useState(0);
    const [nome, setNome] = useState('');
    const [checked, setChecked] = useState(false);
    const [nomePag, setNomePag] = useState(false);
    const [idBoolean, setTipoCrud] = useState(false);

    const { codigo } = useParams();


    function IfCrud() {
       let nomeCampo = ''; 
      if(codigo == 0) {
        nomeCampo= 'Inclusão de Equipamento';
        setTipoCrud(true);
    } else {
        nomeCampo= 'Alteração de Equipamento';
        setTipoCrud(false);
    }       
    setNomePag(nomeCampo);
    }

    useEffect(()=> {

    IfCrud();
    getEquipment();
    getDevices();
    getDepartments();    
    }, []);



    async function getDevices() {

        try {
            
            if(idBoolean) {
                setChecked(true);
            } else {
                  var response = await api.get('/device/');
                  var data = response.data;
                  setListaDispositivo(data);

                } 
        } catch (error) {
        }

        }    

        async function getDepartments() {

            try {
                
                if(idBoolean) {
                    setChecked(true);
                } else {
                      var response = await api.get('/department/');
                      var data = response.data;
                      setListaSetores(data);
    
                    } 
            } catch (error) {
            }
    
            }           


    async function getEquipment() {

        try {
            
            if(idBoolean) {
                setChecked(true);
            } else {
                  var response = await api.get('/equipment/' + codigo);
                  var data = response.data;
                  setNome(data.nome_equip); 
                  setDispositivo(data.CodPk_disp); 
                  setSetor(data.CodPk_setor); 

                  
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


    async function handleEquipment(e) {
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
                        await api.post('equipment', data);
                    } else {
                    await api.put('/equipment/' + codigo, data);                        
                    }

                    history.push('/equips');
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

        <form className="form--edit" onSubmit={handleEquipment} >
        <div className="row--marca">
            <label >Equipamento</label>
            <input type="text"
                   name="nome_equip" 
                   placeholder="nome do equipamento"
                   value={nome}
                   onChange= {e => setNome(e.target.value)}
                   />
        </div>
        <div className="row--marca">
            <label > Dispositivo</label>
 
                <select className="Select-equip" name="CodPk_disp"> 
                    {listaDispositivo.map(item => (
                        <option 
                        name="CodPk_disp"
                        key={item.id} 
                        value={item.id}
                        onChange= {e => setDispositivo(e.target.value)}> {item.nome} </option> 
                    ))}
               
                </select>

        </div>
        <div className="row--marca">
            <label > Nome Setor</label>
                <select className="Select-equip" name="CodPk_setor"> 
                {listaSetores.map(item => (
                        <option 
                        name="CodPk_disp"
                        key={item.id} 
                        value={item.id}
                        onChange= {e => setSetor(e.target.value)}> {item.nomeSetor} </option> 
                    ))}
                </select>

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
            <Link to="/equips" className="button-return-marca" >Voltar</Link>
        </div>
        </form>

    </section>
</>

    )
}




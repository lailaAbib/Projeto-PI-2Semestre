import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api/api.js';
import './style.css';


import Header from '../../Header/HeaderPF';
// import Card from '../../Cadastro/Endereco.js';


export default function DashPF() {
    let idBoolean = false
    const [crud, setCrud] = useState('I');

    const [endereco, setEndereco] = useState([]);
    const [idAdress, setIdAdress] = useState(0);
    const [legenda, setLegenda] = useState('Inclusão de Endereço');
    
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [token, setToken] = useState('');
    const [checked, setChecked] = useState(true);


    let data = {};
    const IdUsers = localStorage.getItem('UserID');




    useEffect (()=> {




        getEndereco();
    }, []);



    function toggle() {
        setChecked(!checked)
    }


    function apagaDados() {    
        setRua('');
        setNumero('');
        setBairro('');
        setComplemento('');
        setCep('');
        setCidade('');
        setUf('');
        setToken('');
        setChecked(true);    
    }



    async function HandleCep(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        apagaDados();

        // criando a consulta do cep
        fetch(`http://localhost:3333/correios/?cep=${data.cep}`)
        .then(res => res.json())
        .then(data => {
            const array = data;

            setRua(array.logradouro);
            setBairro(array.bairro);
            setCep(array.cep);
            setCidade(array.localidade);
            setUf(array.uf);
        })
        .catch(error => console.error)

    }

      

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.CodPk_Users = IdUsers;
        data.cep = cep;

        if(checked) {
            data.AtivoInativo = 'A'
        } else {
            data.AtivoInativo = 'I'            
        }

        if(rua == '' && numero == '' && bairro == '' && complemento == '' && 
        cep == '' && cidade == '' && uf == '' && token == '') {
         idBoolean = false;
        } else {
         idBoolean = true;
        }
 
        try {
            if(idBoolean) {
                
                if(crud === 'I'){
                    await api.post('address', data);
                } else if(crud === 'A') {
                    await api.put('address/' + idAdress, data);
                } else {
                }

                getEndereco();
                apagaDados();
            } else {
                alert('Preencha todos os campos!!!')
            }
        } catch (error) {
            console.log('Endereço Não Cadastrado')            
        }
                
    }        
    
    function HandleIdAdress(id, value) {
        setCrud(value);
        setIdAdress(id);
        getEnderecoByID(id);

        if(value == 'A') {
            setLegenda('Alteração de Endereço');
        } else {
            setLegenda('Inclusão de Endereço');
        }
    }

    async function getEnderecoByID(idend) {
        try {
            var response = await api.get('/address/' + idend);
             data = response.data;  
             apagaDados();
             setRua(data.rua);
             setNumero(data.numero);
             setBairro(data.bairro);
             setComplemento(data.complemento);
             setCep(data.cep);
             setCidade(data.cidade);
             setUf(data.UF);
             setToken(data.token_autorizacao);

             if(data.AtivoInativo === 'A') {
                setChecked(true);
            } else {
                setChecked(false);                
            }

   
            } catch (error) {
                console.log(error)
            }
        }
         

    async function getEndereco() {
    try {
        var response = await api.get('/users/' + IdUsers);
         data = response.data.adressess;  
         setEndereco(data);                  

         endereco.lenght && endereco.map(item => (
            <section className="listEnd" key={item.id} onClick={() => HandleIdAdress(item.id, 'A')}>
                <div className="listaend">
                    <span className= "SpanEnd" >Rua {item.rua}</span>
                    <span className= "SpanEnd" >Bairro {item.bairro}</span>
                    <span className= "SpanEnd" >Cep {item.cep}</span>
                    <span className= "SpanEnd" >Situação: {item.AtivoInativo == 'A' ? 'Ativo' : 'Inativo'}</span>
                </div>  
            </section>  
        ))




        } catch (error) {
        console.log(error)
    }
}





    return (
        <>
           <div>
                <Header />
           </div>

        <section>
        <div className="sectionDash">
                <div className="head">
                </div>

        <div className="endereco">
            <div className="main--end">

            <div id="content-main">    
                <h2>Endereços Cadastrados</h2>
                <main className="main-Endereco">
                    { endereco.map(item => (
                        <div className="listEnd" key={item.id} onClick={() => HandleIdAdress(item.id, 'A')} >
                            <div className="lista">
                                <span className= "SpanEnd" >Rua: {item.rua}, n° {item.numero}</span>
                                <span className= "SpanEnd" >Bairro: {item.bairro}</span>
                                <span className= "SpanEnd" >Cep: {item.cep}</span>
                                <span className= "SpanEnd" >Situação: {item.AtivoInativo == 'A' ? 'Ativo' : 'Inativo'}</span>

                            </div>
                        </div>  
                    ))}
                </main>


            </div>
        </div>

                <div className="form--end">
              <div className="nova">
                  <h2>{legenda}</h2>
                  </div>          


            <form onSubmit={HandleCep}>
            <button type="submit" name="cep" id="btn-cep">Buscar Cep</button>
                <input 
                type="text" 
                name="cep" 
                id="cep"
                placeholder="CEP"
                value={cep}
                onChange= {e => setCep(e.target.value)}                
                />
        
                <Link to="#" className="novoEnd" onClick={() => HandleIdAdress(0, 'I')}  >incluir Novo Endereço</Link>            

            </form>
                
            <form className="form--dados" onSubmit={handleSubmit} >
            <div className="card--end1">
            <label htmlFor="rua">Rua </label>
                <input 
                type="text" 
                name="rua" 
                id="rua" 
                value={rua}
                onChange= {e => setRua(e.target.value)}                                
                />

            <label htmlFor="numero">N° </label>
                <input 
                type="number" 
                name="numero" 
                id="endNum" 
                value={numero}
                onChange= {e => setNumero(e.target.value)}
                />
            </div>
            <div className="card--end1">
                <label htmlFor="complemento">Complemento </label>
                <input 
                type="text" 
                name="complemento" 
                id="compl" 
                value={complemento}
                onChange= {e => setComplemento(e.target.value)}
                />
                <label htmlFor="bairro">Bairro</label>
                <input 
                type="text" 
                name="bairro" 
                id="bairro" 
                value={bairro}
                onChange= {e => setBairro(e.target.value)}                
                />
            </div>

            <div className="card--end1">
                <label htmlFor="cidade">Cidade</label>
                <input 
                type="text" 
                name="cidade" 
                id="cidade" 
                value={cidade}
                onChange= {e => setCidade(e.target.value)}                
                />
                <label htmlFor="UF">Estado</label>
                <input 
                type="text" 
                name="UF" 
                id="UF"
                value={uf}
                onChange= {e => setUf(e.target.value)}                
                />
            </div>
             <span>Use o código fornecido pela Companhia da Saneamento</span>
            <div className="card--end1">
                <label htmlFor="token">Token Autorização</label>
                <input 
                type="text" 
                name="token_autorizacao" 
                id="token"
                value={token}
                onChange= {e => setToken(e.target.value)}                                
                />
                    <input type="checkbox" 
                        name="AtivoInativo" 
                        id="AtvInativo"
                        checked={checked}
                        onClick= {e => toggle()}                           
                        /><span>Ativo</span>

                </div>
                <div className="btn-Endereco">
                <button type="submit" >Salvar</button>
                <Link to="dashPF" id="bt--volta">Voltar</Link>            
                </div>
            </form>
        </div>
    </div>

        </div>

        </section>


        </>
    )

}

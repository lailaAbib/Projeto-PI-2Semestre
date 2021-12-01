import React, { useState, useEffect }  from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css'

import icon from "../../assets/iconCadastro.png"

import api from '../../services/api/api.js';

export default function CadastroPF() {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');



  useEffect(()=> {


    }, []);



  async function handleSubmit (e) {
    let cadastro = false;
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.AtivoInativo = "A";


    if(nome=='' && email =='' && senha== '') {
      alert('Campos não preenchidos')
      
    } else {
      // console.log(data);
      cadastro = true;
    }
    
    
    try {
      if(cadastro) {
        await api.post('/users', data);
        alert('Cadastro efetuado com sucesso');
        history.push('/LoginPF');
      }      

    } catch (error) {
      alert(error)
    }


  }



  return (
    <div className="login--Geral">
        <section className="form-section">
            <h1 className="Title--H1">Novo Cadastro</h1>
            <figure>
                <img className="icon" src={icon} />
            </figure>


            <div className="form-wrapper">
            <form action="" className="Form--login" onSubmit={handleSubmit}>
            <div className="input-block">
                <label for="Nome--Cadastro">Nome</label>
                <input 
                type="text" 
                id="Nome--Cadastro" 
                name="nome" 
                value={nome}
                onChange= {e => setNome(e.target.value)}
                />
                </div>

                <div className="input-block">
                <label for="email--cadastro">E-mail</label>
                <input 
                type="email" 
                id="email--cadastro" 
                name="email" 
                value={email}
                onChange= {e => setEmail(e.target.value)}                
                />
                </div>

                <div className="input-block">
                <label for="password--Cadastro">Senha</label>
                <input 
                type="password" 
                id="password--Cadastro" 
                name="senha" 
                value={senha}
                onChange= {e => setSenha(e.target.value)}                
                />
                </div>
                <div className="links--login">
                <Link to="/LoginPF"> Fazer Login</Link>
                </div>


                <button type="submit" className="btn-login">Cadastre-se</button>
            </form>
                <Link to="/" className="btRetorna"> Retornar</Link>

            </div>
        </section>
    </div>
  )
}
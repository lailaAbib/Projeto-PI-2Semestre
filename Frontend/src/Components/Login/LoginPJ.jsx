import React, { useState, useEffect }  from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css'

import icon from "../../assets/empresa.png";

import api from '../../services/api/api.js';

export default function LoginPJ() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [confEmail, setConfemail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');



    async function getEmpresa(idEmail) {
        try {
            var response = await api.get('/companyemail/' + idEmail);
            var data = response.data;            
            setConfemail(data.email);
            setConfSenha(data.senha);
            localStorage.setItem('CompanyID', data.id);
            localStorage.setItem('CompanyName', data.empresa);
            localStorage.setItem('CompanyResp', data.responsavel);

        } catch (error) {
            console.log('Vindo no erro')
            console.log(error)
        }

    }

    async function handleSubmit (e) {
        let cadastro = false;
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataForm = Object.fromEntries(formData);
        setEmail(dataForm.email);
        setSenha(dataForm.senha);
        
        if(email =='' && senha == '') {
            alert('Campos não preenchidos')
            cadastro = false;
        } else {            
            getEmpresa(email);
            cadastro = true;            
        }                

        try {
            if(cadastro) {
                if(email != confEmail) {
                  alert('Empresa não cadastrada');    
              } else if(senha != confSenha) {
                  alert('Senha Inválida!!!');
                } else {
                    history.push('/dashPJ');
                }
  
            }      
      
          } catch (error) {
              console.log(error);
          }


    }

    return (
    <div className="login--Geral">
        <section class="form-section">
            <h1 className="Title--H1">Login Pessoa Jurídica</h1>
            <figure>
                <img className="icon" src={icon} />
            </figure>

            <div className="form-wrapper">
            <form action="" className="Form--login"  onSubmit={handleSubmit}>
                <div className="input-block">
                <label for="login-email">Email</label>
                <input 
                type="email" 
                id="login-email" 
                name="email" 
                value={email}
                onChange= {e => setEmail(e.target.value)}                                                
                />
                </div>
                <div className="input-block">
                <label for="login-password">Password</label>
                <input 
                type="password" 
                id="login-password" 
                name="senha" 
                value={senha}
                onChange= {e => setSenha(e.target.value)}                                                
                />
                </div>
                <button type="submit" className="btn-login">Login</button>
            </form>
                <Link to="/" className="btRetorna"> Retornar</Link>

            </div>
        </section>
    </div>
  )
}
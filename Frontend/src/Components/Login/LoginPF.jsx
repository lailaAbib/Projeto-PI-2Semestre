import React, { useState, useEffect }  from 'react';
import { Link, useHistory} from 'react-router-dom';

import './Login.css'

import icon from "../../assets/icon.png"

import api from '../../services/api/api.js';

export default function LoginPF() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [confEmail, setConfemail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
  

        useEffect(()=> {

        }, []);


    async function getEmail(idEmail) {    
        try {
            var response = await api.get('/usersemail/' + idEmail);
            var data = response.data;            
            setConfemail(data.email);
            setConfSenha(data.senha);
            localStorage.setItem('UserID', data.id);
            localStorage.setItem('UserName', data.nome);


        } catch (error) {
            console.log('Vindo no erro')
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
            getEmail(email);
            cadastro = true;
            
        }                
        try {
          if(cadastro) {
              if(email != confEmail) {
                alert('Usuario não está cadastrado');    
            } else if(senha != confSenha) {
                alert('Senha Inválida!!!');
              } else {
                  history.push('/dashPF');
              }

          }      
    
        } catch (error) {
            console.log(error);
        }
    
    
      }
    

  return (
    <div className="login--Geral">
        <section className="form-section">
            <h1 className="Title--H1">Login Pessoa Fisica</h1>
            <figure>
                <img className="icon" src={icon} alt="users"/>
            </figure>

            <div className="form-wrapper">
            <form action="" className="Form--login" onSubmit={handleSubmit}>
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
                <label for="login-password">Senha</label>
                <input 
                type="password" 
                id="login-password" 
                name="senha" 
                value={senha}
                onChange= {e => setSenha(e.target.value)}                                
                />
                </div>
                <div className="links--login">
                <Link to="#">Esqueceu a senha?</Link>
                <Link to="/cadastroPF"> Cadastre-se</Link>
                </div>

                <button type="submit" className="btn-login">Login</button>
            </form>
                <Link to="/" className="btRetorna"> Retornar</Link>

            </div>
        </section>
    </div>
  )
}
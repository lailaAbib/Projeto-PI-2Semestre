import React  from 'react';
import InputMask from "react-input-mask";
import './Cadastro.css'


export default function Cadastro(props) {
  return (
    <div className="tela">
        
        <div className="cadas" align="center">
            <h1 className="titulo">Cadastro</h1>
            <form>
                <label>
                <input type="text" name="name" placeholder=" Nome"/>
                </label>

                <label>
                <input type="text" name="surname" placeholder=" Sobrenome"/>
                </label>
            </form>
            <form>
                <label className="address">
                <input type="text" name="address" placeholder=" Endereço"/>
                </label>

                <label className="number">
                <input type="number" class="form-control" placeholder=" Nº" />
                </label>
            </form>
            <form >
                <label className="address-2">
                <input type="text" name="district" placeholder=" Bairro"/>
                </label>

                <label className="address-2">
                <input type="text" name="complement" placeholder=" Complemento"/>
                </label>

                <label>
                <InputMask className="InputMask" mask="99999-999" value={props.value} onChange={props.onChange} />                
                </label>
                <br />
                <a className="busca" href="https://buscacepinter.correios.com.br/app/endereco/index.php">Buscar endereço</a>
            </form>
            <form>
                <label className="city">
                <input type="text" name="city" placeholder=" Cidade"/>
                </label>

                <label>
                <select className="uf" name="estado"> 
                    <option value="UF">UF</option> 
                    <option value="ac">Acre</option> 
                    <option value="al">Alagoas</option> 
                    <option value="am">Amazonas</option> 
                    <option value="ap">Amapá</option> 
                    <option value="ba">Bahia</option> 
                    <option value="ce">Ceará</option> 
                    <option value="df">Distrito Federal</option> 
                    <option value="es">Espírito Santo</option> 
                    <option value="go">Goiás</option> 
                    <option value="ma">Maranhão</option> 
                    <option value="mt">Mato Grosso</option> 
                    <option value="ms">Mato Grosso do Sul</option> 
                    <option value="mg">Minas Gerais</option> 
                    <option value="pa">Pará</option> 
                    <option value="pb">Paraíba</option> 
                    <option value="pr">Paraná</option> 
                    <option value="pe">Pernambuco</option> 
                    <option value="pi">Piauí</option> 
                    <option value="rj">Rio de Janeiro</option> 
                    <option value="rn">Rio Grande do Norte</option> 
                    <option value="ro">Rondônia</option> 
                    <option value="rs">Rio Grande do Sul</option> 
                    <option value="rr">Roraima</option> 
                    <option value="sc">Santa Catarina</option> 
                    <option value="se">Sergipe</option> 
                    <option value="sp">São Paulo</option> 
                    <option value="to">Tocantins</option> 
                </select>
                </label>

                <div className="checkbox">
                    <input type = "checkbox" id = "codificação" name = "interesse" value = "codificação" />
                    <label for = "coding"> Ativo? </ label>
                </div>
            </form>
                <button className="cadastro">
                    Cadastrar
                </button>
        </div>
    </div>
  );
};
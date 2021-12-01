import React from 'react';
import { Link } from 'react-router-dom';
import './tabela.css'


const Tabelas = props => {

    function getLlinhas() {
        
        const arrayItem = props.items;
        console.log(arrayItem);

        return arrayItem.map((item, i)=> {
        let sit = '';
        if(item.AtivoInativo === 'A') {
            sit = 'Ativo'
        } else {
            sit = 'Inativo'
        }

        return ( 
            <tr className ={ i % 2 === 0 ? "par" : "impar"} key={item.id}>
                <td> {item.id} </td>   
                 <td> {item.nome_equip } </td>   
                 <td> {item.depto.nomeSetor } </td>   
                <td> {sit} </td>   
                <td> <Link to={ props.nav + item.id }> <i className="bi bi-clipboard-data"> </i> </Link> </td>   
                <td> <i className="bi bi-trash"></i> </td>   
            </tr>
        )       
    })

}
return (
    <div className = "tabela">
            <table>
                <thead>
                    <tr>
                        <th> {props.item1} </th> 
                        <th>Equipamento</th> 
                        <th>Setor</th> 
                        <th>Situação</th> 
                        <th>editar</th> 
                        <th>Inativar</th> 
                    </tr>         
                    </thead>
                    <tbody>
                        {getLlinhas()}
                    </tbody>
            </table>
        </div>
    )
}

export default Tabelas;
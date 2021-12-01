import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
// import './style.css';


const Adress = props => {

    function listAdress() {
        const arrayAdress = props.items;        
     
        // return arrayAdress.map((item, i)=> {
        //     let sit = '';
        //     if(item.AtivoInativo === 'A') {
        //         sit = 'Ativo'            
        //     } else {
        //         sit = 'Inativo'                        
        //     }

        //     return (

        //         <section className="listEnd" key={item.id}>
        //             <div className="listaend">
        //                 <span className= "SpanEnd" >Rua {item.rua}</span>
        //                 <span className= "SpanEnd" >Bairro {item.bairro}</span>
        //                 <span className= "SpanEnd" >Cep {item.cep}</span>
        //             </div>  
        //         </section>  
        //     )
        // })

    }

    return (
        <>
        listAdress()
        </>
    )
}

export default Adress;
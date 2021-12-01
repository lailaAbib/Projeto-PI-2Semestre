import React from 'react';

import Header from '../../Header/HeaderEmpresa';


import grafi1 from '../../../assets/Grafico1.png';
import grafi2 from '../../../assets/Grafico2.png';



export default function DashPJ() {
    const NameCompany = localStorage.getItem('CompanyName');


    return (
        <>
           <div>
                <Header />
           </div>

            <section>

            <div className="sectionDash">
                <div className="head">
                </div>
                    <h2>{NameCompany}</h2>
                <div className="cards">
                    <div className="card1">
                        <i class="bi bi-people-fill"></i>
                            <p>Qde de Maquinas em manutenção</p>
                            <span>1</span>
                </div>
                    <div className="card1">
                        <i class="bi bi-ui-radios-grid"></i>
                            <p>Economia de Consumo Mes</p>
                            <span>401 L</span>
                    </div>
                    <div className="card1">
                        <i class="bi bi-ui-checks"></i>
                            <p>Dispositivos Conectados</p>
                    <span>6</span>

                    </div>
                    <div className="card1">
                        <i class="bi bi-cash"></i>
                        <p>Economia de Agua no Periodo</p>
                    <span>R$ 39.480,25</span>
                    </div>
                </div>


            <div class="container-fluid container-content charts">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="card shadow">
                            <img src={grafi1} alt="" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="card shadow">
                    <img src={grafi2} alt="" />
                    </div>
                </div>
            </div>

            </div>

            </div>

            </section>


        </>
    )

}

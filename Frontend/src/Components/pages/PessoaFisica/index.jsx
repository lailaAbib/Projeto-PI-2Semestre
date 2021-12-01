import React from 'react';
import './style.css';


import Header from '../../Header/HeaderPF';
import ChartBar from '../../../charts/Bar';

import grafi1 from '../../../assets/Grafico1.png';
import grafi2 from '../../../assets/Grafico2.png';

export default function DashPF() {
    const IdUsers = localStorage.getItem('UserID');


    return (
        <>
           <div>
                <Header />
           </div>

        <section>

            <div className="sectionDash">
                <div className="head">
                </div>
                <div className="cards">
                    <div className="card1">
                        <i class="bi bi-people-fill"></i>
                            <p>Qde Pessoas na residência</p>
                            <span>4</span>
                </div>
                    <div className="card1">
                        <i class="bi bi-ui-radios-grid"></i>
                            <p>consumo por Pessoa</p>
                            <span>401 L</span>
                    </div>
                    <div className="card1">
                        <i class="bi bi-ui-checks"></i>
                            <p>Vlr Medio por pessoa</p>
                    <span>R$ 823,00</span>

                    </div>
                    <div className="card1">
                        <i class="bi bi-cash"></i>
                        <p>Vlr gasto no periodo</p>
                    <span>R$ 3.290,25</span>
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

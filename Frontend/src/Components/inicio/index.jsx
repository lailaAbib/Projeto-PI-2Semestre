import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Inicio() {

    

    return (
        <div>
            
            <header className="header">
                <nav>
                    <ul className="menu-h">
                        <li><a href="#secction1"> Home</a></li>
                        <li><a href="https://odsbrasil.gov.br/" target="blanck"> Ods Brasil</a></li>
                        <li><a href="http://www.ods.cnm.org.br/agenda-2030" target="blanck"> Agenda 2030</a></li>
                        <li><Link to="/LoginPF">  Login PF</Link></li>
                        <li><Link to="/LoginPJ"> Login Empresas</Link></li>
                    </ul>
                </nav>
                
                </header>
        
                <section id="secction1">
                    <div className="main">
                        <h1>Estudo constata gigantesca perda de água potável no Brasil</h1>
                        <p>artigo de Adrimauro Gemaque</p>
                        <br />
                        <p>Essa é uma parte do artigo, extraido de <a href="https://www.ecodebate.com.br/2021/06/10/estudo-constata-gigantesca-perda-de-agua-potavel-no-brasil/">Ecodebate.com.br</a></p>

                        <br />
                        <h2>Volume sem utilização daria para levar o precioso líquido aos quase 35 milhões de brasileiros que não têm acesso nem para lavar as mãos em plena pandemia, e também atender, por quase três anos, aos mais de 13 milhões de brasileiros que habitam em favelas.</h2>
                        <br />

                        <p>Um dos maiores desafios dos gestores públicos tem sido garantir acesso da população à água potável. Números de 2019 mostram perda de 40%. Caso esse índice venha a ser reduzido para 25% todas as favelas do país poderão receber o precioso líquido por quase três anos.</p>

                        <p>O cálculo, divulgado dia 31 de maio de 2021, é resultado de um novo estudo do Instituto Trata Brasil em parceria com a Associação Brasileira dos Fabricantes de Materiais para Saneamento (Asfamas), elaborado pela Consultoria GO Associados e denominado <strong>“Perdas de água potável (2021, ano base 2019: desafios para a disponibilidade hídrica e ao avanço da eficiência do saneamento básico”.</strong></p>
                        <p>O estudo foi feito a partir de dados públicos do Sistema Nacional de Informações sobre Saneamento (Snis), ano base 2019, contemplando análise das 27 unidades federativas e das cinco regiões do país, bem como das cem maiores cidades – os mesmos municípios do Ranking do Saneamento Básico.</p>
                        <p>É um cenário preocupante em plena pandemia da covid-19, pois se trata de acesso a recursos hídricos, elemento crucial para a população brasileira que se vê à mercê de precários índices referentes à água potável, somando-se a isso a ineficiência do setor de saneamento básico em relação aos índices de perdas do referido líquido.</p>
                        <p>A análise do estudo diz em um dos seus pontos: “Em pleno século 21, e no maior país da América Latina, o Brasil ainda registra grande ineficiência na distribuição da água potável pelas cidades. Quase 40% (39,2%) de toda água potável captada não chega de forma oficial as residências do país, o que representa um volume equivalente a 7,5 mil piscinas olímpicas de água tratada desperdiçada diariamente ou sete vezes o volume do Sistema Cantareira – maior conjunto de reservatórios para abastecimento do Estado de São Paulo. Mesmo considerando apenas os 60% deste volume que são de perdas físicas (vazamentos), estamos falando de uma quantidade suficiente para abastecer mais de 63 milhões de brasileiros em um ano, equivalente a 30% da população brasileira em 2019. Esse volume seria, portanto, mais que suficiente para levar água aos quase 35 milhões de brasileiros que até hoje não possuem acesso nem para lavar as mãos em plena pandemia. Poderia também atender, por quase três anos, aos mais de 13 milhões de brasileiros que habitam em favelas”.</p>
                        <p>“O documento prossegue: Além de atender a este enorme contingente de brasileiros, no que se refere ao impacto ambiental, o volume de água que poderia ser economizado da natureza certamente ajudaria a manter mais cheios os rios e reservatórios espalhados pelo país. Como é de conhecimento de todos, em várias localidades brasileiras estamos vivendo escassez de chuvas e, de acordo com o ONS (Operador Nacional do Sistema Elétrico), a precipitação deste ano pode ser o menor dos últimos 91 anos colocando em risco os reservatórios de água para abastecimento, mas também os voltados à geração de energia elétrica.</p>
                        <p>Uma redução dos atuais 40% de Índice Perdas de Faturamento Total para índices próximos a 25%, meta prevista pela Portaria Nº 490 do Ministério do Desenvolvimento Regional, permitiria a economia de um volume da ordem de 2,2 bilhões de m³. Significa que, mesmo se conseguirmos uma redução não tão ambiciosa nas perdas de água, já seria volume suficiente para atender a aproximadamente 39 milhões de brasileiros num ano – número equivalente aos brasileiros historicamente sem acesso”.</p>
                        <br />


                    </div>
                    <div className="aside">
                        <h1>Estatisticas</h1>
                        <div className="artigos">
                            <img src="https://www.tratabrasil.org.br/images/estatisticas/MEDICO.png" alt=""  />
                            <p>O Brasil teve mais de 273 mil internações por doenças de veiculação hídrica em 2019</p>
                        </div>
                        <div className="artigos">
                            <img src="https://www.tratabrasil.org.br/images/estatisticas/agua2x.png" alt=""  />
                            <p>Quase 100 milhoes de brasileiros(46% não tem acesso a coleta de esgoto</p>
                        </div>
                        <div className="artigos">
                            <img src="https://www.tratabrasil.org.br/images/estatisticas/torneira2x.png" alt=""  />
                            <p>83,7% dos brasileiros têm acesso á água tratada</p>
                        </div>

                        <div className="artigos">
                            <img src="https://www.tratabrasil.org.br/images/estatisticas/profit2x.png" alt=""  />
                            <p>O Brasil investiu mais de R$ 15 milhoes em melhorias de saneamento básico em 2019</p>
                        </div>
                        <div className="artigos">
                            <img src="https://www.tratabrasil.org.br/images/estatisticas/agua-residual2x.png" alt=""  />
                            <p>54,1% dos brasileiros tem acesso à coleta de esgoto</p>
                        </div>
                        <blockquote>Fonte: <a href="https://www.tratabrasil.org.br/pt/" target="blank">Trata Brasil</a></blockquote>
                    </div>

                </section>


        <footer>
            <nav>
                <ul>
                    <li>Dados do footer</li>
                    <li>Dados do footer</li>
                    <li>Dados do footer</li>
                    <li>Dados do footer</li>
                </ul>
            </nav>

        </footer>

        </div>
    )

}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Inicio from './Components/inicio/index';
import LoginPF from './Components/Login/LoginPF';
import LoginPJ from './Components/Login/LoginPJ';
import DashBoardPF from './Components/pages/PessoaFisica/index';
import AtualizaPF from './Components/pages/PessoaFisica/endereco';
import DashBoardPJ from './Components/pages/PessoaJuridica/index';
import CadastroPF from './Components/Login/LoginCadastro';

import EquipamentoEdita from './Components/pages/PessoaJuridica/CompAltera/Equipamentos';
import EquipamentoLista from './Components/pages/PessoaJuridica/Equipamentos';

import SetoresLista from './Components/pages/PessoaJuridica/Setores';
import SetoresEdita from './Components/pages/PessoaJuridica/CompAltera/Setores';

import DispositivoLista from './Components/pages/PessoaJuridica/Dispositivos';
import DispositivoEdita from './Components/pages/PessoaJuridica/CompAltera/Dipositivo';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/LoginPF" component={LoginPF} />
                <Route exact path="/LoginPJ" component={LoginPJ} />
                <Route exact path="/dashPF" component={DashBoardPF} />
                <Route exact path="/dashPJ" component={DashBoardPJ} />
                <Route exact path="/endPF" component={AtualizaPF} />
                <Route exact path="/cadastroPF" component={CadastroPF} />

                <Route exact path="/equips" component={EquipamentoLista} />
                <Route exact path="/equips/:codigo" component={EquipamentoEdita} />

                <Route exact path="/setores" component={SetoresLista} />
                <Route exact path="/setores/:codigo" component={SetoresEdita} />

                <Route exact path="/device" component={DispositivoLista} />
                <Route exact path="/device/:codigo" component={DispositivoEdita} />
            </Switch>
        </BrowserRouter>
    );
}

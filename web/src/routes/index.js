import React from "react";
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Tarefa from '../views/Tarefa';
import QRCode from '../views/QRCode';

export default function Routes() {

    return (
        <BrowserRouter>
        
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/tarefa" exact component={Tarefa}/>
                <Route path="/tarefa/:id" exact component={Tarefa}/>
                <Route path="/qrcode" exact component={QRCode}/>
            </Switch>

        </BrowserRouter>
    )
}

import React from 'react';
import ReactDOM from 'react-dom';

//import Home from './views/Home';
//import Tarefa from './views/Tarefa';
//<Home />
// <Tarefa />

import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>

    <Routes />
    
  </React.StrictMode>,
  document.getElementById('root')
);


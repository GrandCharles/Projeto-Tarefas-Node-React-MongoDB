import React, { useState, useEffect } from 'react';
import * as styl from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import isConnected from "../../Utils/isConnected";

import logo from '../../assets/logo@2x.png';
import bell from '../../assets/bell.png';
import logout from '../../assets/log-out.png';


function Header({ clickLate }) {
  const [getCtrlLate, setCtrlLate] = useState();

  // tarefas atrasadas
  async function ctrlLate() {
    await api.get(`/tarefa/filter/late/${isConnected}`)
      .then(response => {
        setCtrlLate(response.data.length)
      })
  }

  async function sair() {
    localStorage.removeItem('@grandCharles/macadddress');
    window.location.reload();

  }

  useEffect(() => {
    ctrlLate();
  }, [])


  return (
    <styl.Container>

      <styl.LeftSide>
        <img src={logo} alt='Logo' />
      </styl.LeftSide>

      <styl.RightSide>
        <Link to="/">INÍCIO</Link>

        <span className="dividir" />

        <Link to="/tarefa">NOVA TAREFA</Link>

        <span className="dividir" />

        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>

        {
          getCtrlLate &&
          <>
            <span className="dividir" />

            <button id="idNotificacao" onClick={clickLate} >
              <img src={bell} alt='Notificação' />

              <span>{getCtrlLate}</span>
            </button>
          </>
        }

        <button id="idSair"  title='Sair' onClick={sair} >
          <img src={logout} alt='Sair' />
        </button>

      </styl.RightSide>

    </styl.Container>

  )
}

export default Header;

// useState - armazena o estado
// useEffect - Dispara toda a vez que a tela é carregada
import React, { useState, useEffect } from "react";     // Guardo o estado de uma pagina

import { Link, Redirect } from 'react-router-dom';

// Importanto todos os componentes da pasta corrente style.ja
import * as styl from './styles';

// Importando a API
import api from '../../services/api';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TarefaCard from '../../components/TarefaCard';
import isConnected from "../../Utils/isConnected";


// Reinderizando na Home o Header
function Home() {
  // Variáveis de estado
  // Estado das opções de filtro
  const [filtroAtivo, setFiltroAtivo] = useState('all');
  // Estado da tarefa com uma coleção vazia
  const [tarefa, setTarefa] = useState([]);
  const [redirect, setRedirect] = useState(false);

  // Carregar do BD as tarefas
  async function loadTarefa() {
    // `` Interpolação para usar variável
    await api.get(`/tarefa/filter/${filtroAtivo}/${isConnected}`)
      .then(response => {
        setTarefa(response.data)
      })
  }

  // Trocar notificação e listar as atrasadas
  function funcLate() {
    setFiltroAtivo('late');
  }

  // toda vez que a tela recarregar chama  loadTarefa() e recarrega no filtroAtivo
  useEffect(() => {
    loadTarefa();
    if (!isConnected){
      setRedirect(true);
    }
  }, [filtroAtivo, loadTarefa])

  return (
    <styl.Container>
      {redirect && <Redirect to="/qrcode" />}

      <Header clickLate={funcLate} />

      <styl.FilterArea>

        <FilterCard titulo='Todos' ativo={filtroAtivo === 'all'} onClick={() => setFiltroAtivo('all')} />
        <FilterCard titulo='Hoje' ativo={filtroAtivo === 'today'} onClick={() => setFiltroAtivo('today')} />
        <FilterCard titulo='Semana' ativo={filtroAtivo === 'week'} onClick={() => setFiltroAtivo('week')} />
        <FilterCard titulo='Mês' ativo={filtroAtivo === 'month'} onClick={() => setFiltroAtivo('month')} />
        <FilterCard titulo='Ano' ativo={filtroAtivo === 'year'} onClick={() => setFiltroAtivo('year')} />

      </styl.FilterArea>

      < styl.Titulo>
        <h3>{filtroAtivo == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </styl.Titulo>

      <styl.Content>
        {
          // map ira percorrer
          tarefa.map(t => (
            <Link to={`/tarefa/${t._id}`} >
              <TarefaCard tipo={t.tipo}
                titulo={t.titulo}
                dataHora={t.dataHora}
                concluido={t.concluido}
              />
            </Link>
          ))
        }

      </styl.Content>

      <Footer />

    </styl.Container>
  )
}

export default Home;

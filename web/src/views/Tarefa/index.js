// useState - armazena o estado
// useEffect - Dispara toda a vez que a tela é carregada
import React, { useState, useEffect } from "react";     // Guardo o estado de uma pagina
import { Redirect } from 'react-router-dom';

// Importanto todos os componentes da pasta corrente style.ja
import * as styl from './styles';
import { format } from 'date-fns'
// Importando a API
import api from '../../services/api';
import isConnected from "../../Utils/isConnected";

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../Utils/typeIcons';
import NameIcons from '../../Utils/nameIcons';
import iconCalender from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

// Reinderizando na Home o Header
function Tarefa({ match }) {
    //Estados
    const [redirect, setRedirect] = useState(false);
    const [Id, setId] = useState();
    const [tipo, setTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [concluido, setConcluido] = useState(false);

    async function CarregarTarefa() {
        await api.get(`/tarefa/${match.params.id}`)
            .then(response => {
                setTipo(response.data.tipo)
                setTitulo(response.data.titulo)
                setDescricao(response.data.descricao)
                setData(format(new Date(response.data.dataHora), 'yyyy-MM-dd'))
                setHora(format(new Date(response.data.dataHora), 'HH:mm'))
                setConcluido(response.data.concluido)
            })
    }

    // Persistência
    async function salvar() {
        //Validação dos dados
        if (!titulo)
            return alert("Título é obrigatório")
        else if (!descricao)
            return alert("Descrição é obrigatório")
        else if (!tipo)
            return alert("Selecione um tipo de tarefa")
        else if (!data)
            return alert("Data da tarefa é obrigatório")
        else if (!hora)
            return alert("Horário da tarefa é obrigatório")

        if (match.params.id) {
            await api.put(`/tarefa/${match.params.id}`, {
                macadddress: isConnected,
                tipo,
                titulo,
                descricao,
                dataHora: `${data}T${hora}:00.000`,
                concluido
            })
                .then(() => { setRedirect(true) })

        } else {
            // Inclusão
            await api.post('/tarefa', {
                macadddress: isConnected,
                tipo,
                titulo,
                descricao,
                dataHora: `${data}T${hora}:00.000`
            }).then(() => setRedirect(true))
              .catch(response => {alert(response.data.error)})
        }
    }

    async function Remover() {
        const resp = window.confirm('Deseja Excuir a tarefa?');

        if (resp == true) {
            await api.delete(`/tarefa/${match.params.id}`)
                .then(() => setRedirect(true));
        }
    }


    // toda vez que a tela recarregar chama  loadTarefa() e recarrega no filtroAtivo
    useEffect(() => {
        if (!isConnected) {
            setRedirect(true);
        }
        CarregarTarefa();
    }, [])

    return (
        <styl.Container>
            {redirect  && <Redirect to="/" />}

            <Header  />

            <styl.Form>

                <styl.TypeIcons>
                    {
                        TypeIcons.map((icon, index, name) => (
                            index > 0 &&

                            <li key={index} >
                                <button type="button" onClick={() => setTipo(index)}>
                                    <img src={icon} alt="Tipo da Tarefa"
                                        className={tipo && tipo != index && 'inativo'} />
                                </button>
                            </li>
                        ))
                    }
                </styl.TypeIcons>

                <styl.Inputs>
                    <span>Título:</span>
                    <input type='text'
                        placeholder='Título da Tarefa'
                        onChange={ev => setTitulo(ev.target.value)}
                        value={titulo} />
                </styl.Inputs>

                <styl.TextArea>
                    <span>Descrição:</span>
                    <textarea rows='4'
                        placeholder='Descrição da Tarefa'
                        onChange={ev => setDescricao(ev.target.value)}
                        value={descricao} />
                </styl.TextArea>

                <styl.Inputs>
                    <span>Data:</span>
                    <input type='date'
                        placeholder='Data da Tarefa'
                        onChange={ev => setData(ev.target.value)}
                        value={data} />
                    <img src={iconCalender} alt="Calendário" />
                </styl.Inputs>

                <styl.Inputs>
                    <span>Hora:</span>
                    <input type='time'
                        placeholder='Hora da Tarefa'
                        onChange={ev => setHora(ev.target.value)}
                        value={hora} />
                    <img src={iconClock} alt="Calendário" />
                </styl.Inputs>

                <styl.Options>
                    <div>
                        <input type="checkbox"
                            checked={concluido}
                            onChange={() => setConcluido(!concluido)}
                        />
                        <span>Concluído - </span>
                    </div>

                    {match.params.id && <button type="button" onClick={Remover}>Excluir</button>}

                </styl.Options>

                <styl.Save>
                    <button type="button" onClick={salvar}>
                        Salvar
                    </button>
                </styl.Save>

            </styl.Form>

            <Footer />
        </styl.Container>
    )
}

export default Tarefa;

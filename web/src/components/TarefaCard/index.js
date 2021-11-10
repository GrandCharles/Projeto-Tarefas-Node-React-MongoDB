import React,{useMemo} from 'react';
import {format} from 'date-fns';
import * as styl from './styles';
import typeIcons from '../../Utils/typeIcons';

//import iconDefault from '../../assets/default.png';


function TarefaCard({tipo,titulo,dataHora,concluido}) {
    const data = useMemo(() => format(new Date(dataHora), 'dd/MM/yyyy'));
    const hora = useMemo(() => format(new Date(dataHora), 'HH:mm'));

    return (
        <styl.Container concluido={concluido}>
            
            <styl.TopCard>
                <img src={typeIcons[tipo]} alt='Icone Tarefa'/>
                <h4>{titulo}</h4>
            </styl.TopCard>

            <styl.BottonCard>
                <strong>{data}</strong>
                <span>{hora}</span>
            </styl.BottonCard>

        </styl.Container>
    )
}

export default TarefaCard;
const TarefaModel = require('../model/TarefaModel');

// isPast - verifica se esta no passado
const {isPast} = require('date-fns');

const tarefaValidation = async(req, res, next) => {
    // Busca tudo da requisição do corpo
    const {macadddress,tipo,titulo,descricao,dataHora} = req.body;
    
    if(!tipo)
        return res.status(400).json({erro: 'Tipo é obrigatório'});
    else if(!titulo)
        return res.status(400).json({erro: 'Título é obrigatório'});
    else if(!descricao)
        return res.status(400).json({erro: 'Descrição é obrigatório'});
    else if(!dataHora)
        return res.status(400).json({erro: 'Data e Hora são obrigatórios'});
    else {
        let existe;

        if (req.params.id) {

            existe =  await TarefaModel.findOne({
                '_id':{'$ne': req.params.id},                           // Operador de negação not exist
                'dataHora': {'$eq': new Date(dataHora)},                // Na mesma data e horário
                'macadddress' : {'$in': macadddress}                    // Já existe este dados no Mongodb
            });

        } else {

            if (!macadddress)  
                 return res.status(400).json({erro: 'macaddress é obrigatório'});
            else if(isPast(new Date(dataHora)))
                 return res.status(400).json({erro: 'Escolha uma Data e Hora futura'});
         
            existe =  await TarefaModel.findOne({
                'dataHora': {'$eq': new Date(dataHora)},                // Na mesma data e horário
                'macadddress' : {'$in': macadddress}                    // Já existe este dados no Mongodb
            });

            if (existe) {
                return res.status(400).json({erro: 'Já existe uma tarefa nessa Data e Hora'});
            }
        }
      
        next();
    }
};

module.exports= tarefaValidation;

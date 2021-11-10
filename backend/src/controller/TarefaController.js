const { response } = require('express');
const TarefaModel = require('../model/TarefaModel');
const {
    startOfDay, 
    endOfDay, 
    startOfWeek, 
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear
} = require('date-fns');

const dataSys =  new Date();

class TarefaController {

    async create(req, res) {
        const tarefaModel = new TarefaModel(req.body);

        await tarefaModel.save()
                         .then(response => {
                              return res.status(200).json(response)})   // Deu certo
                         .catch(error => {
                                return res.status(500).json(error)})        // Deu errado             
    }
    
    // {new:true} retorna os dados atualizados
    async update(req, res) {
        await TarefaModel.findByIdAndUpdate({ '_id': req.params.id }, 
                                            req.body, 
                                            { new: true })  
            .then(response => {
                return res.status(200).json(response);
            })       // Deu certo
            .catch(error => {
                return res.status(500).json(error);
            })            // Deu errado             
    }

    // Lista todas as tarefas  $in pertence
    async all(req, res) {
        await TarefaModel.find({ macadddress: { '$in': req.params.macadddress } })
            .sort('dataHora')
            .then(response => {return res.status(200).json(response);})       // Deu certo
            .catch(error => {return res.status(500).json(error);})            // Deu errado             
    }

    async show(req,res){
        await TarefaModel.findById(req.params.id)
        .then(response => {
            if (response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Tarefa não encontrada'});}) 
        .catch(error => {return res.status(500).json(error);})            // Deu errado             
    }

    async delete(req,res) {
        await TarefaModel.deleteOne({'_id' : req.params.id})
        .then(response => {
            return res.status(200).json(response);})
        .catch(error => {return res.status(500).json(error);})            // Deu errado             
    }

    // Atualizar "Concluído"
    async done(req,res) {
        await TarefaModel.findByIdAndUpdate({'_id': req.params.id},
                                            {'concluido': req.params.concluido},
                                            {new: true})
        .then(response => {            
            return res.status(200).json(response);})
        .catch(error => {
            return res.status(500).json(error);})
    }

    // Tarefas atrasadas - $lte menor ou igual)
    async late(req,res) {
        await TarefaModel.find({
                                 'macadddress' : {'$in': req.params.macadddress},
                                 'dataHora': {'$lte' : dataSys}
                               })
                         .sort('dataHora')
                         .then(response => {            
                            return res.status(200).json(response);})
                         .catch(error => {
                            return res.status(500).json(error);})
    }

    // Tarefas do dia - $gte maior ou igual / $lte menor ou igual)
    async today(req,res) {
        await TarefaModel.find({
                                'macadddress' : {'$in': req.params.macadddress},
                                'dataHora': {'$gte' : startOfDay(dataSys), '$lte' : endOfDay(dataSys)}
                              })
                         .sort('dataHora')
                         .then(response => {            
                            return res.status(200).json(response);})
                         .catch(error => {
                            return res.status(500).json(error);})
    }

    // Tarefas da semana - $gte maior ou igual semana / $lte menor ou igual semana)
    async week(req,res) {
        await TarefaModel.find({
                                'macadddress' : {'$in': req.params.macadddress},
                                'dataHora': {'$gte' : startOfWeek(dataSys), '$lte' : endOfWeek(dataSys)}
                                })
                            .sort('dataHora')
                            .then(response => {            
                            return res.status(200).json(response);})
                            .catch(error => {
                            return res.status(500).json(error);})
    }

    // Tarefas do meês - $gte maior ou igual semana / $lte menor ou igual semana)
    async month(req,res) {
        await TarefaModel.find({
                                'macadddress' : {'$in': req.params.macadddress},
                                'dataHora': {'$gte' : startOfMonth(dataSys), '$lte' : endOfMonth(dataSys)}
                                })
                            .sort('dataHora')
                            .then(response => {            
                            return res.status(200).json(response);})
                            .catch(error => {
                            return res.status(500).json(error);})
    }

        // Tarefas do ano - $gte maior ou igual semana / $lte menor ou igual semana)
        async year(req,res) {
            await TarefaModel.find({
                                    'macadddress' : {'$in': req.params.macadddress},
                                    'dataHora': {'$gte' : startOfYear(dataSys), '$lte' : endOfYear(dataSys)}
                                    })
                                .sort('dataHora')
                                .then(response => {            
                                return res.status(200).json(response);})
                                .catch(error => {
                                return res.status(500).json(error);})
        }
    
}

module.exports = new TarefaController();

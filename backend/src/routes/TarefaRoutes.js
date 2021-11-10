const express = require('express');
const router = express.Router();

const TarefaController = require('../controller/TarefaController');
const TarefaValidation = require('../middlewares/TarefaValidation');
const MacadddressValidation = require('../middlewares/MacadddressValidation');

// Incluir
router.post('/', TarefaValidation, TarefaController.create);
//Alterar
router.put('/:id', TarefaValidation,  TarefaController.update);
// Listar somente um tarefa
router.get('/:id',TarefaController.show);
// Deletar um registro
router.delete('/:id',TarefaController.delete);
// Atualizar o campo "concluido"
router.put('/:id/:concluido',TarefaController.done);

/*
// Listar todos
router.get('/filter/all', MacadddressValidation, TarefaController.all);
// Tarefas atrasadas
router.get('/filter/late',macadddressValidation, TarefaController.late);
// Tarefas do dia
router.get('/filter/today',macadddressValidation, TarefaController.today);
// Tarefas da semana
router.get('/filter/week',macadddressValidation, TarefaController.week);
// Tarefas do mês
router.get('/filter/month',macadddressValidation, TarefaController.month);
// Tarefas do ano
router.get('/filter/year',macadddressValidation, TarefaController.year);
*/

// Listar todos
router.get('/filter/all/:macadddress',  TarefaController.all);
// Tarefas atrasadas
router.get('/filter/late/:macadddress', TarefaController.late);
// Tarefas do dia
router.get('/filter/today/:macadddress', TarefaController.today);
// Tarefas da semana
router.get('/filter/week/:macadddress', TarefaController.week);
// Tarefas do mês
router.get('/filter/month/:macadddress', TarefaController.month);
// Tarefas do ano
router.get('/filter/year/:macadddress', TarefaController.year);

module.exports = router;
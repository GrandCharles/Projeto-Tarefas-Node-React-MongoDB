
const { Schema } = require('mongoose');

const mongoose = require('../config/database');

const schema = mongoose.Schema;

const tarefaSchema = new schema({
    macadddress: { type: String, required: true },
    tipo: { type: Number, required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    dataHora: { type: Date, required: true },
    concluido: { type: Boolean, default: false },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('TabTarefa', tarefaSchema);


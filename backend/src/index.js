const express = require('express');
const cors = require('cors'); // Conecção com o front end
const server = express();

server.use(cors());
server.use(express.json());

const TarefaRoutes = require('./routes/TarefaRoutes');
server.use('/tarefa',TarefaRoutes);

server.listen(3333,()=>{
    console.log('API ONLINE - Porta 3333');
})


/*
// rota teste
server.get('/teste', (res, req) => {
    req.send('Tudo Certo com nossa API');});
*/


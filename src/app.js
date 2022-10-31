//REQUISITAR O MÓDULO EXPRESS
const express = require ("express");

//INSTANCIAR O EXPRESS
const app = express();

// REQUISITAR O MÓDULO CORS
const cors = require("cors");

//INSTANCIAR O CORS ("use" é uma funcionalidade do express )
app.use(cors ());

//"PARSEAR" O BODY DA REQUISIÇÃO PARA LEITURA DO JSON
app.use(express.json());

const usersRoutes = require ("./routes/usersRoutes");

//DEFINIR A ROTA PRINCIPAL DO PROJETO
app.use("/users", usersRoutes)

//EXPORTAR O PACOTE INTERNAMENTE
module.exports = app;
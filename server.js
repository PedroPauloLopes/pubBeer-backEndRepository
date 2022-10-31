//IMPORTAÇÃO INTERNA DO EXPRESS, VINDO DO MODULE "APP.JS"
const app = require ("./src/app");

//DEFINIÇÃO DA PORTA USADA PELO SERVIDOR
const PORT = 8000;

//INICIALIZAR O SERVIDOR ("listen" é uma funcionalidade do express)
app.listen(PORT, () => {
    console.log(`Servidor rodando normalmente na porta ${PORT}`)
})
// PARA VER TODOS OS USUÁRIOS É NECESSÁRIO IMPORTAR O ARQUIVO DE USUÁRIOS (../models/users.json)
const users = require ("../models/users.json");

//FUNÇÃO PARA GERENCIAR A REQUISIÇÃO DO "CLIENT" E A RESPOSTA DO "SERVER"
// req = request , res = response -> funcionalidades do node.js
const getAll = (req, res) => {
        res.status(200).send(users)

    };

// FUNÇÃO PARA CRIAR UM OBJETO COM INFORMAÇÕES DE UM NOVO USUÁRIO E ADICIONÁ-LO À LISTA DE USUÁRIOS    
const createUsers = (req,res) =>{
        const userName = req.body.userName;
        const userAge = req.body.userAge;

        if (!userName || !userAge) {
            return res.status(404).send({
                "message" : "Informações incompletas. Verifique os dados e tente novamente.",
                "statusCode" : 404
            })
        }

    const newUser = {
            "userName" : userName,
            "userAge" : userAge,
            "addedAt" : new Date()     
    }

//PARA INCLUIR NA LISTA DE USUÁRIOS    
    users.push(newUser);
    res.status(201).send({
        "message" : "Novo usuário adicionado com sucesso!",
        newUser
    });


}    

//EXPORTAR INTERNAMENTE A FUNÇÃO getAll
    module.exports = {
        getAll,
        createUsers
    }
//IMPORTAR O EXPRESS E O ROUTER DO EXPRESS
const express = require("express");
const router = express.Router();

//IMPORTAR INTERNAMENTE A FUNÇÃO getAll
const controllers = require("../controllers/usersControllers");

//IMPORTAR INTERNAMENTE A FUNÇÃO createUSERS
const users = require("../controllers/usersControllers")

//CRIAR ROTA GET
router.get("/all", controllers.getAll);

//CRIAR ROTA POST
router.post("/create", controllers.createUsers)

//EXPORTAR O ROUTER
module.exports = router;
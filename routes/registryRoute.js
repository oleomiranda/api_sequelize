const routes = require("express").Router()
const registyControll = require("../controllers/registryControll")

routes.post("/user/create", registyControll.Create)
routes.patch("/user/:userID/update", registyControll.Edit)
routes.delete("/user/:userID/delete", registyControll.Delete)

module.exports = routes
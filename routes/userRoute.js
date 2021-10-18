const routes = require("express").Router()
const userControll = require("../controllers/userControll")

routes.post("/user/:userID/garage", userControll.addCar)
routes.get("/user/:userID/garage", userControll.getUserGarage)

module.exports = routes
const routes = require("express").Router()
const garageControll = require("../controllers/garageControll")


routes.get("/garage/all", garageControll.getAllGarages)
routes.get("/garage/:garageID", garageControll.getGarage)
routes.delete("/garage/delete", garageControll.deleteCar)

module.exports = routes
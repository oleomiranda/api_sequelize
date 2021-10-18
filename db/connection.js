const dbconfig = require("./config")
const {Sequelize, Model, DataTypes}= require("sequelize")
const user = require("../models/User")
const garage = require("../models/Garage")
const users = require("../models/User")
const sequelize = new Sequelize(dbconfig)


sequelize.authenticate().then(() => {
	console.log("Conectado ao db")
}).catch(() => {
	console.log("Não conectou ao db")
})

garage.init(sequelize)
users.init(sequelize)
garage.associate(sequelize.models)
user.associate(sequelize.models)




module.exports = {sequelize, Sequelize, Model, DataTypes}
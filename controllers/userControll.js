const users = require("../models/User")
const garage = require("../models/Garage")
module.exports = {
	addCar: async (req, res) => {
		try {
			let { car, brand } = req.body
			let { userID } = req.params

			let newCar = await garage.create({
				brand,
				car,
				user_id: userID
			})

			res.status(200).json(newCar)
		} catch (error) {
			console.log(error)
			res.status(500).json(error)
		}
	},
	getUserGarage: async (req, res) => { //procura carros do usuario usando o id do usuario
		try {

			let { userID } = req.params

			//retonar nome e idade do uasio e marcas e nomes dos carros desse usuario
			let cars = await users.findByPk(userID, { attributes: ["name", "age"], include: { attributes: ["brand", "car"], association: 'garage' } })

			if (cars === null) return res.status(204)

			return res.status(200).json({ cars })

		} catch (error) {

			res.status(500).json({ "status": "Houve um erro. Tente novamente" })
		}
	}

}
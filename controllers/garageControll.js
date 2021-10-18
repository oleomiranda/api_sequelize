const garageModel = require("../models/Garage")
const users = require("../models/User")

module.exports = {
	getAllGarages: async (req, res) => { //pega todas garagens
		try {
			let garages = await garageModel.findAll({attributes: ["brand", "car"], include: [{model: users, as: "Owner", attributes: ["name"]}]})

			if (garages === null) return res.status(204)
			
			return res.status(200).json(garages)

		} catch (error) {

			res.status(500).json({ "status": "Houve um erro. Tente novamente" })
		}
	},
	getGarage: async (req, res) => { //pega uma garagem pelo id 
		try {
			let { garageID } = req.params
			
			// busca carro retornando id marca e nome e o nome do dono usando alias
			let garagem = await garageModel.findByPk(garageID, { attributes: ["id", "brand", "car"], include: [{ model: users, as: "Owner", attributes: ["name"] }] }) 

			if (garagem === null) return res.status(404).json({ "status": "A garagem não foi encontrada" })

			return res.status(200).json(garagem)

		} catch (error) {
			res.status(500).json({ "status": "Houve um erro. Tente novamente" })
		}
	},
	deleteCar: async (req, res) => { // deleta um carro
		let { userID, car } = req.body

		garageModel.destroy({ where: [{ user_id: userID }, { car }] })
		.then(() => {
			
			res.status(200).json({ "status": "Carro removido com sucesso" })
		
		}).catch((err) => {

			res.status(500).json({ "status": "Houve um erro. Tente novamente" })
		})

	}


}
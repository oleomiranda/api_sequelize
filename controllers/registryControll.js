const users = require("../models/User")

module.exports = {
	Create: async (req, res) => { //cria novo usuario 
		try {

			const { name, email, age } = req.body

			let user = await users.create({
				name,
				email,
				age
			})

			res.status(200).json(user)
			
		} catch (error) {
			
			res.status(500).json({"status":"Não foi possivel criar o usuario. Tente novamente"})
		}
	},
	Edit: async (req, res) => { // edita informação do usuario

		const {userID} = req.params

		users.update(req.body, {where: {id: userID}})
		.then(() => {

			res.status(200).json({"status":"Informação atualizada com sucesso."})
		
		}).catch(() => {
		
			res.status(400).json({"status":"Não foi possivel atualizar a informação. Tente novamente"})
		
		})
	}, 	
	Delete: async (req, res) => { // deleta usuario

		const {userID} = req.params

		users.destroy({where:{id: userID}})
		.then((usuario) => {
			
			if(usuario == 0) return res.status(404).json({"status": "Usuário não encontrado"})

			return res.status(200).json({"status": "Usuário deletado com sucesso"})

		}).catch(() => {

			res.status(400).json({"status":"Não foi possivel deletar o usuário"})

		})


	}

}
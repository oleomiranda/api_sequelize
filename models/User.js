const {Model, DataTypes} = require("sequelize")
const garage = require("./Garage")

class users extends Model {
	static init(sequelize){
		super.init({
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			age: DataTypes.STRING,
		}, {sequelize})
	}
	static associate(models){
		this.hasMany(models.garage, {foreignKey: 'user_id', as: 'garage'})
	}
}
module.exports = users
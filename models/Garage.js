const {Model, DataTypes} = require("sequelize")
const user = require("./User")

class garage extends Model { 
	static init(sequelize){
		super.init({
			brand: DataTypes.STRING,
			car: DataTypes.STRING,
			user_id: DataTypes.INTEGER
		}, {sequelize})
	}
	static associate(models){
		this.belongsTo(models.users, {foreignKey: 'user_id', as: 'Owner'})
	}
}	

module.exports = garage
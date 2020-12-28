const Sequelize = require('sequelize')
const db = require('../../database')

const Product = db.define(
	'product',
	{

		name: {type: Sequelize.STRING},
		price: 	{type: Sequelize.INTEGER},
		description: {type: Sequelize.STRING}
	},
	{
		freezeTableName: true
	}
)

module.exports = Product;

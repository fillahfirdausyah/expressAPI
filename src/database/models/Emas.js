const Sequelize = require('sequelize')
const db = require('../../../database')

const Emas = db.define(
	'emas',
	{
		berat: {type: Sequelize.INTEGER},
		harga: {type: Sequelize.INTEGER},
	},
	{
		freezeTableName: true,
	}
)

module.exports = Emas;

const Sequelize = require('sequelize')
const db = require('../../../database')

const User = db.define(
	'users',
	{
		nama: 			{type: Sequelize.STRING},
		portofolio: {type: Sequelize.INTEGER},
		total_emas: {type: Sequelize.INTEGER},
		email: 			{type: Sequelize.STRING},
		password: 	{type: Sequelize.STRING}
	},
	{
		freezeTableName: true
	}
)

module.exports = User;

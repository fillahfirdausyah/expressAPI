const sequelize = require('sequelize')

const db = new sequelize('expressAPI', 'fill', 'secret', {
	dialect: 'postgres'
})

db.sync;

module.exports = db;

const sequelize = require('sequelize')

const db = new sequelize('expressAPI', 'fill', 'secret', {
	dialect: 'mysql'
})

db.sync;

module.exports = db;

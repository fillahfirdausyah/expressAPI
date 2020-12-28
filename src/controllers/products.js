exports.show = (req, res, next) => {
	res.json(
		{
			message: 'Status Code 200',
			data: {
				id: 1,
				name: 'Vaseline',
				price: 4000
			}
		}
	)
}

exports.create = (req, res, next) => {
	res.json(
		{
			message: 'Status Code 200',
			data: {
				id: 2,
				name: 'Biyu Skin',
				price: 145000
			}
		}
	)
}

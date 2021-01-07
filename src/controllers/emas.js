const Emas = require('../database/models/Emas')

// Create
exports.create = async(req, res) => {
	try {
		const { berat, harga } = req.body;
		const newEmas = new Emas({
			berat, harga
		})
		await newEmas.save()
		res.json(
			{
				status: 200,
	      message: "Data Berhasil Ditambahkan",
	      data: newEmas
			}
		)
	} catch (err) {
		res.status(500).send(
    {
      status: 500,
      message: err.message
    })
	}
}

// Details
exports.details = async(req, res) => {
	try {
		const emasId = req.params.id
		const emasDetails = await Emas.findAll({
				where: {
					id: emasId
				}
			})
		if(emasDetails == 0) {
      res.json(
        {
          satus: '200',
          message: 'Data Kosong',
          data: emasDetails
        }
      )
    }else {
      res.json(
        {
          satus: '200',
          message: 'Data Berhasil Diambil',
          data: emasDetails
        }
      )
    }
	} catch (err) {
		res.status(500).send(
    {
      status: 500,
      message: err.message
    })
	}
}

// List
exports.list = async (req, res) => {
	try {
		const getAllEmas = await Emas.findAll({});
    res.json(
      {
        status: 200,
        message: "Data Berhasil Difetch",
        data: getAllEmas
      }
    )
	} catch (err) {
		res.status(500).send(
    {
      status: 500,
      message: err.message
    })
	}
}


// Update
exports.update = async(req, res) => {
  try {
    const emasId = req.params.id;
    const {berat, harga} = req.body;

    const updateEmas = await Emas.update(
      {
				berat,
				harga
      },
      {
        where: {
          id: emasId
        }
      }
    )
    if(updateEmas == 0) {
      res.json(
        {
          status: 200,
          message: 'Data Tidak Ditemukan',
          data: updateEmas
        }
      )
    }else {
      res.json(
        {
          status: 200,
          message: 'Data Berhasil Diubah',
          data: updateEmas
        }
      )
    }
  } catch (err) {
    res.status(500).send(
    {
      status: 500,
      message: err.message
    })
  }
}

// Delete
exports.delete = async(req, res) => {
	try {
		const emasId = req.params.id
		const deleteEmas = await Emas.destroy({
			where: {
				id: emasId
			}
		})

		res.json(
			{
				status: 200,
				message: "Data Berhasil Dihapus",
			}
		)
	} catch (err) {
		res.status(500).send(
      {
        status: 500,
        message: err.message
      }
    )
	}
}

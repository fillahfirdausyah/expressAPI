const User = require('../database/models/User')

// CREATE USER
exports.create = async(req, res) => {
  try {
    const {nama, portofolio, total_emas, email, password} = req.body;
    const newUser = new User({
      nama, portofolio, total_emas, email, password
    })
    await newUser.save()
    res.json({
      status: 200,
      message: "Data Berhasil Ditambahkan",
      data: newUser
    })
  } catch (err) {

    res.status(500).send(
    {
      status: 500,
      message: err.message
    })
  }
}

// GET ALL USER
exports.list = async(req, res) => {
  try {
    const getAllUser = await User.findAll({});
    res.json(
      {
        status: 200,
        message: "Data Berhasil Difetch",
        data: getAllUser
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

// SHOW USER DETAILS
exports.details = async(req, res) => {
  try {
    const userId = req.params.id
    const userDetails = await User.findAll({
      where: {
        id: userId,
      }
    })
    if(userDetails == 0) {
      res.json(
        {
          satus: '200',
          message: 'Data Kosong',
          data: userDetails
        }
      )
    }else {
      res.json(
        {
          satus: '200',
          message: 'Data Berhasil Diambil',
          data: userDetails
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

exports.update = async(req, res) => {
  try {
    const userId = req.params.id;
    const {nama, portofolio, total_emas, email, password} = req.body;

    const updateUser = await User.update(
      {
        nama,
        portofolio,
        total_emas,
        email,
        password,
      },
      {
        where: {
          id: userId
        }
      }
    )
    if(updateUser == 0) {
      res.json(
        {
          status: 200,
          message: 'Data Tidak Ditemukan',
          data: updateUser
        }
      )
    }else {
      res.json(
        {
          status: 200,
          message: 'Data Berhasil Diubah',
          data: updateUser
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

// DELETE USER
exports.delete = async(req, res,) => {
  try {
    const userId = req.params.id
    const deleteUser = User.destroy({
      where: {
        id: userId
      }
    })
    res.json(
      {
        status: 200,
        message: 'Data Berhasil Dihapus'
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

const express = require('express');
const router = express.Router()

const userController = require('../controllers/user')

// GET ALL
router.get('/list', userController.list)

// GET ONE
router.get('/details/:id', userController.details)

// POST
router.post('/create', userController.create)

// PUT
router.patch('/update/:id', userController.update)	

// DELETE
router.delete('/delete/:id', userController.delete)

module.exports = router;

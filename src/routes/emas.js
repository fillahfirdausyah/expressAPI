const express = require('express');
const router = express.Router()

const emasController = require('../controllers/emas')

// GET
router.get('/list', emasController.list)

// GET ONE
router.get('/details/:id', emasController.details)

// POST
router.post('/create', emasController.create)

// PATCH
router.patch('/update/:id', emasController.update)

// DELETE
router.delete('/delete/:id', emasController.delete)

module.exports = router;

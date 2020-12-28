const express = require('express');
const router = express.Router()

const productsControllers = require('../controllers/products')

// GET
router.get('/list', productsControllers.show)

// POST
router.post('/create', productsControllers.create)

module.exports = router;

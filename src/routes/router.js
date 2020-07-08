const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const photoController = require('../controllers/photoController')
router.post('/users', userController.index)
router.post('/photos', photoController.index)




module.exports = router
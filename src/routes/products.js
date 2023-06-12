const express = require('express')
const router  = express.Router()

const productController = require('../controllers/productController')

router.get('/create', productController.index)
router.get('/edit', productController.editPage)

module.exports = router
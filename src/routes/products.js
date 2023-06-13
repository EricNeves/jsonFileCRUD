const express = require('express')
const router  = express.Router()

const productController = require('../controllers/productController')

router.get('/edit/:id', productController.editPage)
router.post('/edit', productController.editProduct)

router.get('/create', productController.index)
router.post('/create', productController.create)

module.exports = router
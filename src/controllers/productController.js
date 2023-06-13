const { join } = require('path')

const { uuid } = require('../lib/generateID')
const { convertValueToMoney, convertMoneytoNumber } = require('../lib/numberFormat')

const Product = require('../models/Product')
const product = new Product({
  file: join(__dirname, '../../', 'data/db.json')
})

exports.index = (req, res) => {
  res.render('products/create', {
    title: 'Create Product',
    path: '/products/add-product',
    error: ''
  })
}

exports.create = async (req, res) => {
  const { name, price, image } = req.body

  if (!name || !price || !image) {
    return res.redirect('/products/create')
  }

  const priceFormatted = convertValueToMoney(price)

  try {
    await product.create({ 
      id: uuid(),
      name, 
      price: priceFormatted,
      image
    })
    return res.redirect('/')

  } catch (err) {
    return res.render('products/create', {
      title: 'Create Product',
      path: '/products/create',
      error: 'Sorry, could not create a new product',
    })
  }
}

exports.editPage = async (req, res) => {
  const { id } = req.params

  const data = await product.getById(id)

  if (!data) {
    return res.redirect('/')
  }

  data.price = convertMoneytoNumber(data.price)

  res.render('products/edit', {
    title: 'Update Product',
    path: '/products/edit',
    data
  })
}

exports.editProduct = async (req, res) => {
  const { id, name, price, image } = req.body

  const data = await product.update(id, { name, price, image })

  res.json(data)
}


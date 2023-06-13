const { join } = require('path')
const { convertValueToMoney } = require('../lib/toMoney')

const Product = require('../models/Product')

const product = new Product({
  file: join(__dirname, '../../', 'data/sdb.json')
})

exports.index = (req, res) => {
  res.render('products/create', {
    title: 'Create Product',
    path: '/products/add-product',
  })
}

exports.editPage = (req, res) => {
  res.render('products/edit', {
    title: 'Update Product',
    path: '/products/edit',
  })
}

exports.create = async (req, res) => {
  const { name, price, image } = req.body
  const priceFormatted = convertValueToMoney(price)

  if (!name || !priceFormatted || !image) {
    return res.redirect('/products/create')
  }

  try {
    await product.create({ name, price, image })
    return res.redirect('/')
  } catch (err) {
    res.render('products/create', {
      message: 'Sorry, could not create a new product',
      title: 'Update Product',
      path: '/products/edit',
    })
  }
}
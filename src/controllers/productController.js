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

  try {
    const data = await product.getById(id)
  
    data.price = convertMoneytoNumber(data.price)
  
    return res.render('products/edit', {
      title: 'Update Product',
      path: '/products/edit',
      data,
    })
  } catch (err) {
    return res.redirect('/')
  }
}

exports.editProduct = async (req, res) => {
  const { id, name, price, image } = req.body

  if (!id, !name || !price || !image) {
    return res.redirect(`/products/edit/${id}`)
  }

  try {
    const priceFormatted = convertValueToMoney(price)
    const result = await product.update({id, name, price: priceFormatted, image })
  
    if (!result) {
      return res.redirect(`/products/edit/${id}`)
    } 
    return res.redirect('/')
  } catch (err) {
    return res.redirect(`/products/edit/${id}`)
  }
}

exports.deleteProduct = async (req, res) => {
  const { id } = req.params

  try {
    const result = await product.delete(id)

    if (!result) return res.redirect('/')

    res.redirect('/')
  } catch (err) {
    res.redirect('/')
  }
}


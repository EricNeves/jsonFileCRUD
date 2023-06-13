const { join } = require('path')
const Product = require('../models/Product')

const products = new Product({
  file: join(__dirname, '../../', 'data/db.json')
})

exports.index = async (req, res) => {
  try {
    const data = await products.fetchAll()
    
    res.render('home/home', {
      title: 'Home - Shop',
      path: '/',
      data
    })
  } catch (err) {
    res.render('home/home', {
      title: 'Home - Shop',
      path: '/',
      data: []
    })
  }
}
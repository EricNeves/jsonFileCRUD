const { join } = require('path')
const Products = require('../models/Products')

const products = new Products({
  file: join(__dirname, '../../', 'data/db.json')
})

exports.index = async (req, res) => {
  const data = await products.fetchAll()
  res.render('home/home', {
    title: 'Home - Shop',
    path: '/',
    data
  })
}
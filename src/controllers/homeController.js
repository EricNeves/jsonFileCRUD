const { join } = require('path')
const Product = require('../models/Product')

const products = new Product({
  file: join(__dirname, '../../', 'data/db.json')
})

exports.index = async (req, res) => {
  try {
    const dataFromDB = await products.fetchAll()

    const { initial, offset } = req.query

    let lastProducts = false 
    let initialFormatted = parseInt(initial)
    let offsetFormatted = parseInt(offset)

    let previous = initialFormatted > 0
    
    const dataPartial = dataFromDB.slice(initialFormatted, offsetFormatted)

    if (!initial || !offset) { 
      return res.status(301).redirect('/?initial=0&offset=8')
    }

    if (offsetFormatted > dataFromDB.length) {
      lastProducts = true
    }
    
    res.render('home/home', {
      title: 'Home - Shop',
      path: '/',
      previous,
      lastProducts,
      initialFormatted,
      offsetFormatted,
      data: dataPartial,
    })
  } catch (err) {
    res.render('home/home', {
      title: 'Home - Shop',
      path: '/',
      previous,
      lastProducts,
      initialFormatted,
      offsetFormatted,
      data: []
    })
  }
}
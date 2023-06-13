const { join } = require('path')
const Product = require('../models/Product')

const products = new Product({
  file: join(__dirname, '../../', 'data/db.json')
})

exports.index = async (req, res) => {
  try {
    const dataFromDB = await products.fetchAll()

    const { initial, offset } = req.query

    let initialFormatted = parseInt(initial)
    let offsetFormatted = parseInt(offset)

    let previous = initialFormatted > 0
    
    const dataPartial = dataFromDB.slice(initialFormatted, offsetFormatted)

    if (dataPartial.length === 0) {
      return res.status(301).redirect('/?initial=0&offset=8')
    }
    
    res.render('home/home', {
      title: 'Home - Shop',
      path: '/',
      previous,
      data: dataPartial
    })
  } catch (err) {
    res.render('home/home', {
      title: 'Home - Shop',
      path: '/',
      previous,
      data: []
    })
  }
}
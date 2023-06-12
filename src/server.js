const express = require('express')
const app     = express()
const path    = require('path')

const homeRouter    = require('./routes/home')
const productRouter = require('./routes/products')

const PORT = process.env.PORT || 3000
app.use(express.static(
  path.resolve(__dirname, '..', 'public')
))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: false }))

app.use('/', homeRouter)
app.use('/products', productRouter)

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
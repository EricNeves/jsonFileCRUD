const express = require('express')
const app     = express()
const path    = require('path')

const homeRouter = require('./routes/home')

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(
  path.join(__dirname, '..', 'public')
))
app.use(express.urlencoded({ extended: false }))

app.use('/', homeRouter)

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
exports.index = (req, res) => {
  res.render('home/home', {
    title: 'Home - Shop',
    path: '/'
  })
}
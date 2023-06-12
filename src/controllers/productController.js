exports.index = (req, res) => {
  res.render('products/create', {
    title: 'Create Product',
    path: '/products/create',
  })
}

exports.editPage = (req, res) => {
  res.render('products/edit', {
    title: 'Update Product',
    path: '/products/edit',
  })
}
function convertValueToMoney(amount) {
  return Intl.NumberFormat('en-US', 
    { style: 'currency', currency: 'USD' }
  )
  .format(amount)
}

module.exports = {
  convertValueToMoney
}
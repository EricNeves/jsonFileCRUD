function convertValueToMoney(amount) {
  return Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  )
    .format(amount)
}

function convertMoneytoNumber(amount) {
  return amount.replace(/[$ ,]/g, '')
}

module.exports = {
  convertValueToMoney,
  convertMoneytoNumber
}
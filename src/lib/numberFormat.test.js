const { expect } = require('chai')
const {
   convertValueToMoney, convertMoneytoNumber 
} = require('./numberFormat')

describe('Test Number Formart', function() {
  it('should convert number to money', function() {
    expect(convertValueToMoney('100')).to.equal('$100.00')
  })

  it('should convert money to number', function() {
    expect(convertMoneytoNumber('$100.00')).to.equal('100.00')
  })
})
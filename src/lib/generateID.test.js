const { expect } = require('chai')
const sinon = require('sinon')

const { pure } = require('./generateID')

describe('Test generate ID', function() {
  it('should generate a uuid', function() {
    const dependenciesUUID = sinon.stub().callsFake(() => ({
      random: 10,
      date: 1000 * 3600 * 24
    }))

    const uuid = pure.uuid({ dependenciesUUID })

    expect(uuid()).to.equal('337f9800')
  })
})
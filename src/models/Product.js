const { readFile, writeFile } = require('fs/promises')

class Product {
  constructor({ file }) {
    this.file = file
  }

  async _currentFileData() {
    return JSON.parse(await readFile(this.file))
  }

  async fetchAll() {
    const dataFromFile = await this._currentFileData()
    return dataFromFile
  }

  async create(data) {
    const dataFromFile = await this._currentFileData()
    dataFromFile.unshift(data)
    await writeFile(this.file, JSON.stringify(dataFromFile, null, 2))

    return {
      created: true
    }
  }

  async getById(productId) {
    const dataFromFile = await this._currentFileData()

    const product = dataFromFile.find(({ id }) => id === productId)

    return product
  }

  async update(productID, data) { 
    const dataFromFile = await this._currentFileData()

    const productIndex = dataFromFile.findIndex(({ id }) => id === productID)

    return productIndex
  }
}

module.exports = Product
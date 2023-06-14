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

    return true
  }

  async getById(productId) {
    const dataFromFile = await this._currentFileData()

    const product = dataFromFile.find(({ id }) => id === productId)

    return product
  }

  async update(data) { 
    const dataFromFile = await this._currentFileData()

    const productIndex = dataFromFile.findIndex(({ id }) => id === data.id)

    if (productIndex === -1) return false

    dataFromFile.splice(productIndex, 1)

    const currentProduct = dataFromFile[productIndex]

    const updatedProduct = Object.assign({}, currentProduct, data)

    await writeFile(this.file, JSON.stringify([...dataFromFile, updatedProduct][0], null, 2))

    return true
  }

  async delete(productId) {
    const dataFromFile = await this._currentFileData()

    const productIndex = dataFromFile.findIndex(({ id }) => id === productId)

    if (productIndex === -1) return false

    dataFromFile.splice(productIndex, 1)

    await writeFile(this.file, JSON.stringify([...dataFromFile], null, 2))

    return true
  }
}

module.exports = Product
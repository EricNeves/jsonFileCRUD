const { readFile, writeFile } = require('fs/promises')

class Product {
  constructor({ file }) {
    this.file = file
  }

  async _currentFileData() {
    return JSON.parse(await readFile(this.file))
  }

  async fetchAll() {
    const data = await this._currentFileData()
    return data
  }
}

module.exports = Product
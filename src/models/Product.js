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

  async create(data) {
    const dataFromFile = await this._currentFileData()
    dataFromFile.unshift(data)
    await writeFile(this.file, JSON.stringify(dataFromFile, null, 2))

    return {
      created: true
    }
  }
}

module.exports = Product
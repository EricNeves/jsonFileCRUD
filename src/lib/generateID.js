function uuid() {
  return Math.random(new Date()).toString(16).replace('.', '')
}

module.exports = {
  uuid
}
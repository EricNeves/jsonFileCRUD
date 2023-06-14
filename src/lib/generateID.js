function dependenciesUUID() {
  return {
    random: Math.random(),
    date: new Date(),
  }
}

const uuid = ({ dependenciesUUID }) => function() {
  const { random, date } = dependenciesUUID()
  return (random * date).toString(16).replace('.', '')
}

module.exports = {
  uuid: uuid({ dependenciesUUID }),
  pure: {
    uuid
  }
}
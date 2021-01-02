const mongoose = require('mongoose')

const ConnectionDb = async ({ host, dbName, password, user }) => {
  const uri = `mongodb+srv://${user}:${password}${host}/${dbName}?retryWrites=true&w=majority`
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  console.log('Base de datos iniciada con éxito.')
}

module.exports = ConnectionDb

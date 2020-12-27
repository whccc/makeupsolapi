const { MDFindOne } = require('../Categories/model')
const MDLogin = require('./modelmongodb')

module.exports = {
  async MDSave (objUser) {
    try {
      const User = new MDLogin(objUser)
      await User.save()
    } catch (Error) {
      console.log(Error)
    }
  },
  async MDFindOne ({ strUser, strPassword }) {
    try {
      return await MDLogin.findOne({ strUser, strPassword })
    } catch (Error) {
      console.log(Error)
    }
  }
}

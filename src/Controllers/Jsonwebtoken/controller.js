const jwt = require('jsonwebtoken')

module.exports = {
  async CreateJwt ({ strUser }) {
    try {
      const Token = await jwt.sign({ User: strUser }, process.env.JWT, { expiresIn: 60 * 60 })
      return Token
    } catch (Error) {
      console.log(Error)
    }
  }
}

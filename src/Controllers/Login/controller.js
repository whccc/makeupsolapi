const MDLogin = require('./model')
const Helpers = require('../../Helpers/utils')
const Jwt = require('../Jsonwebtoken/controller')
const ValidateData = (objData) => {
  if (Helpers.ValidateData(objData.strUser)) {
    return Helpers.objResponse(false, 'Empty Field strUser is required')
  }
  if (Helpers.ValidateData(objData.strPassword)) {
    return Helpers.objResponse(false, 'Empty field strPassword is required')
  }
  return Helpers.objResponse(true, 'Fileds with success')
}

module.exports = {
  async LoginCreate (req, res) {
    // Validate data
    let objResponse = {}
    const objValidate = ValidateData(req.body)
    if (!objValidate.Success) {
      res.json(objValidate)
      return
    }
    // Validate duplicate strUser
    const objDuplicate = await MDLogin.MDFindOne(req.body)
    if (objDuplicate == null) {
      await MDLogin.MDSave(req.body)
      objResponse = Helpers.objResponse(true, 'User create with success')
    } else {
      objResponse = Helpers.objResponse(false, 'User already exists')
    }
    res.json(objResponse)
  },
  async Login (req, res) {
    let objResponse = {}
    const objValidate = ValidateData(req.body)
    if (!objValidate.Success) {
      res.json(objValidate)
      return
    }
    // Validate user
    const User = await MDLogin.MDFindOne(req.body)
    if (User == null) {
      objResponse = Helpers.objResponse(false, 'Error contraseña o clave incorrectos.')
    } else {
      const objJwt = await Jwt.CreateJwt(req.body)
      objResponse = Helpers.objResponse(true, { strMessage: 'Datos de usuario acordes', Jwt: objJwt, strUser: User.strUser })
    }
    res.json(objResponse)
  }
}

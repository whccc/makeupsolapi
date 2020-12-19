const Model = require('./model')
const Helpers = require('../../Helpers/utils')

// Validate Data
const ValidateData = (strData) => {
  if (Helpers.ValidateData(strData.strName)) {
    return Helpers.objResponse(false, 'Empty Field strName is required')
  }
  return Helpers.objResponse(true, 'Fields Success')
}

module.exports = {
  // Create category
  async CreateCategories (req, res) {
    try {
      // Data web
      const { strName } = req.body
      let objRes = {}
      // Validate data
      const objValidate = ValidateData(req.body)
      if (!objValidate.Success) {
        res.json(objValidate)
        return
      }
      // Validate duplicate
      const objRespuesta = await Model.MDFindOne({ strName })
      if (objRespuesta == null) {
        // Create category
        Model.MDSave({ strName })
        objRes = Helpers.objResponse(true, 'Category create with success')
      } else {
        objRes = Helpers.objResponse(true, 'Category duplicate error')
      }
      res.json(objRes)
    } catch (Error) {
      console.log(Error)
    }
  }
}

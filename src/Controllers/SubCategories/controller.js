const Model = require('./model')
const Helpers = require('../../Helpers/utils')

// Validate Data
const ValidateData = (strData) => {
  if (Helpers.ValidateData(strData.strName)) {
    return Helpers.objResponse(false, 'Empty field strName is required')
  }
  if (Helpers.ValidateData(strData.strIdCategory)) {
    return Helpers.objResponse(false, 'Empty fields strIdCategory is required')
  }
  return Helpers.objResponse(true, 'fields success')
}

module.exports = {
  async CreateSubCategory (req, res) {
    try {
      const { strName, strIdCategory } = req.body
      let ResJson = {}
      // Validate data
      const objValidate = ValidateData(req.body)
      if (!objValidate.Success) {
        res.json(objValidate)
        return
      }
      // Validate Duplicate
      const Response = await Model.MDFindOne({ strName, strIdCategory })
      // Create sub category
      if (Response == null) {
        Model.MDSave({ strName, strIdCategory })
        // Create obj data
        ResJson = Helpers.objResponse(true, 'Create sub category success')
      } else {
        // Create obj data
        ResJson = Helpers.objResponse(false, 'Sub category duplicate')
      }
      res.json(ResJson)
    } catch (Error) {
      console.log(Error)
    }
  }
}

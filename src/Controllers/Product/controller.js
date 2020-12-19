const MDProduct = require('./model')
const Helpers = require('../../Helpers/utils')
// Validate Data
const ValidateData = (strData) => {
  if (Helpers.ValidateData(strData.strCode)) {
    return Helpers.objResponse(false, 'Empty field strCode is required')
  }
  if (Helpers.ValidateData(strData.strName)) {
    return Helpers.objResponse(false, 'Empty field strName is required')
  }
  if (Helpers.ValidateData(strData.strDescription)) {
    return Helpers.objResponse(false, 'Empty field strDescription is required')
  }
  if (Helpers.ValidateData(strData.strPrice)) {
    return Helpers.objResponse(false, 'Empty field strPrice is required')
  }
  if (Helpers.ValidateData(strData.strIdCategory)) {
    return Helpers.objResponse(false, 'Empty field strIdCategory is required')
  }
  if (Helpers.ValidateData(strData.strIdSubCategory)) {
    return Helpers.objResponse(false, 'Empty field strIdSubCategory is required')
  }
  if (strData.ArrayImages === undefined) {
    return Helpers.objResponse(false, 'Field ArrayImages is required')
  }
  if (strData.ArrayImages.length === 0) {
    return Helpers.objResponse(false, 'Empty field ArrayImages')
  }
  return Helpers.objResponse(true, 'Fields with success')
}
module.exports = {
  async CreateProduct (req, res) {
    let objResponse = {}
    // Validate Date
    const objValidate = ValidateData(req.body)
    if (!objValidate.Success) {
      res.json(objValidate)
    }
    // Validate Code
    const objDuplicate = await MDProduct.MDFindOne(req.body)
    if (objDuplicate == null) {
      await MDProduct.MDSaveProduct(req.body)
      objResponse = Helpers.objResponse(true, 'Product create with success')
    } else {
      objResponse = Helpers.objResponse(false, 'Product strCode duplicate')
    }
    res.json(objResponse)
  }
}

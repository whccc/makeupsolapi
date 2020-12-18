const Model = require('./model')
module.exports = {
  // Create category
  async CreateCategories (req, res) {
    try {
      // Data web
      const { strName } = req.body
      // Validate duplicate
      const objRespuesta = await Model.MDFindOne({ strName })

      if (objRespuesta == null) {
        // Create category
        Model.MDSave({ strName })
        res.json({
          Success: true,
          strMessage: 'Category create with success'
        })
      } else {
        res.json({
          Success: false,
          strMessage: 'Error duplicate name create Category'
        })
      }
    } catch (Error) {
      console.log(Error)
    }
  }
}

const ModelDB = require('./modelmongodb')

module.exports = {
  async MDSave ({ strName, strIdCategory }) {
    try {
      const SubCategory = new ModelDB({
        strName,
        strIdCategory
      })
      await SubCategory.save()
    } catch (Error) {
      console.log(Error)
    }
  },
  async MDFindOne ({ strName, strIdCategory }) {
    try {
      const objReponse = await ModelDB.findOne({ strName, strIdCategory })
      console.log(objReponse)
      console.log(strName, strIdCategory)
      return objReponse
    } catch (Error) {
      console.log(Error)
    }
  }
}

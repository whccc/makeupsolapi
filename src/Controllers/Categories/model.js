const Categories = require('./modelmongodb')

module.exports = {
  async MDSave ({ strName }) {
    // Create Category
    const Category = new Categories({
      strName
    })
    await Category.save()
  },
  async MDFindOne (strData) {
    // Find Category
    const objResponse = await Categories.findOne(strData)
    return objResponse
  }
}

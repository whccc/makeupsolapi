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
  },
  async MDFind () {
    // Get Categories
    const objRes = await Categories.find({ }, { strName: 1 })
    return objRes
  },
  async MDFindPagination ({ Min = 0, Max = 10 }) {
    const objRes = await Categories.find({}, { strName: 1 }).sort({ $natural: -1 }).skip(Min).limit(Max)
    return objRes
  },
  // Update
  async MDFindIdUpdate ({ _id, strText }) {
    const objRes = await Categories.findByIdAndUpdate({ _id }, { strName: strText })
    return objRes
  }
}

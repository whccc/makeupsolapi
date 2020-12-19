const MDProduct = require('./modelmongodb')
module.exports = {
  async MDSaveProduct (objProduct) {
    // Create product
    const Product = new MDProduct(objProduct)
    await Product.save()
  },
  async MDFindOne ({ strCode }) {
    return await MDProduct.findOne({ strCode })
  }
}

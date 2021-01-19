const MDProduct = require("./modelmongodb");
module.exports = {
  async MDSaveProduct(objProduct) {
    // Create product
    try {
      const Product = new MDProduct(objProduct);
      await Product.save();
    } catch (Error) {
      console.log(Error);
    }
  },
  async MDFindOne({ strCode }) {
    return await MDProduct.findOne({ strCode });
  },
  async MDGetProducts() {
    return await MDProduct.find();
  },
  async MDCountProducts() {
    return await MDProduct.estimatedDocumentCount({});
  },
  async MDFindProductsRandom({ Min = 0, Max = 10 }) {
    try {
      const objRes = await MDProduct.find(
        {},
        { createdAt: 0, updatedAt: 0, __v: 0 },
        {}
      )
        .sort({ $natural: -1 })
        .skip(Min)
        .limit(Max);
      return objRes;
    } catch (Error) {
      throw Error;
    }
  },
  async MdFindProductText({ strText }) {
    const objRes = await MDProduct.find({
      $or: [
        { strName: { $regex: `.*${strText}.*`, $options: "i" } },
        { strDescription: { $regex: `.*${strText}.*`, $options: "i" } },
      ],
    })
      .sort({ $natural: -1 })
      .limit(5);
    return objRes;
  },
  async MdDeleteById({ _id }) {
    try {
      await MDProduct.findByIdAndRemove({ _id });
    } catch (Error) {
      console.log(Error);
    }
  },
  async MDUpdateProduct(objProductEdit) {
    try {
      await MDProduct.findByIdAndUpdate(
        { _id: objProductEdit._id },
        { ...objProductEdit }
      );
    } catch (Error) {
      console.log(Error);
    }
  },
  async MDGetProductsBySubCategory({ strIdSubCategory }) {
    try {
      const Data = await MDProduct.find(
        { strIdSubCategory },
        { __v: 0, updatedAt: 0, createdAt: 0 }
      );
      return Data;
    } catch (Error) {
      console.log(Error);
      throw Error;
    }
  },
};

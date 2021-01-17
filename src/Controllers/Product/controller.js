const MDProduct = require("./model");
const Helpers = require("../../Helpers/utils");
// Validate Data
const ValidateData = (strData) => {
  if (Helpers.ValidateData(strData.strName)) {
    return Helpers.objResponse(false, "Empty field strName is required");
  }
  if (Helpers.ValidateData(strData.strDescription)) {
    return Helpers.objResponse(false, "Empty field strDescription is required");
  }
  if (Helpers.ValidateData(strData.strPrice)) {
    return Helpers.objResponse(false, "Empty field strPrice is required");
  }
  if (Helpers.ValidateData(strData.strIdCategory)) {
    return Helpers.objResponse(false, "Empty field strIdCategory is required");
  }
  if (Helpers.ValidateData(strData.strIdSubCategory)) {
    return Helpers.objResponse(
      false,
      "Empty field strIdSubCategory is required"
    );
  }
  if (strData.ArrayImages === undefined) {
    return Helpers.objResponse(false, "Field ArrayImages is required");
  }
  if (strData.ArrayImages.length === 0) {
    return Helpers.objResponse(false, "Empty field ArrayImages");
  }
  return Helpers.objResponse(true, "Fields with success");
};
module.exports = {
  async CreateProduct(req, res) {
    try {
      let objResponse = {};
      // Validate Date
      const objValidate = ValidateData(req.body);
      console.log(objValidate);
      if (!objValidate.Success) {
        res.json(objValidate);
        return;
      }
      // Validate Code
      await MDProduct.MDSaveProduct(req.body);
      objResponse = Helpers.objResponse(true, "Product create with success");

      res.json(objResponse);
    } catch (Error) {
      console.log(Error);
    }
  },
  async GetProducts(req, res) {
    try {
      const Data = await MDProduct.MDGetProducts();
      res.json(Data);
    } catch (Error) {
      console.log(Error);
    }
  },
  async GetProductLimitTen(req, res) {
    try {
      const Data = await MDProduct.MDFindPagination(req.body);
      const Count = await MDProduct.MDCountProducts();
      res.json({ Products: Data, Count });
    } catch (Error) {
      console.log(Error);
    }
  },
  async GetProductsSearch(req, res) {
    try {
      const Data = await MDProduct.MdFindProductText(req.body);
      res.json({ Products: Data });
    } catch (Error) {
      console.log(Error);
    }
  },
  async DeleteProduct(req, res) {
    try {
      await MDProduct.MdDeleteById(req.body);
      res.json({ Success: true });
    } catch (Error) {
      console.log(Error);
    }
  },
  async EditProduct(req, res) {
    try {
      await MDProduct.MDUpdateProduct(req.body);
      res.json({ Success: true });
    } catch (Error) {
      console.log(Error);
      res.json({ Success: false });
    }
  },
};

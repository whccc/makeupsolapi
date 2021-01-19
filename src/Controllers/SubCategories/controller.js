const Model = require("./model");
const Helpers = require("../../Helpers/utils");

// Validate Data
const ValidateData = (strData) => {
  if (Helpers.ValidateData(strData.strName)) {
    return Helpers.objResponse(false, "Empty field strName is required");
  }
  if (Helpers.ValidateData(strData.strIdCategory)) {
    return Helpers.objResponse(false, "Empty fields strIdCategory is required");
  }
  return Helpers.objResponse(true, "fields success");
};

module.exports = {
  async CreateSubCategory(req, res) {
    try {
      const { strName, strIdCategory, strNameCategory } = req.body;
      let ResJson = {};
      // Validate data
      const objValidate = ValidateData(req.body);
      if (!objValidate.Success) {
        res.json(objValidate);
        return;
      }
      // Validate Duplicate
      const Response = await Model.MDFindOne({ strName, strIdCategory });
      // Create sub category
      if (Response == null) {
        Model.MDSave({ strName, strIdCategory, strNameCategory });
        // Create obj data
        ResJson = Helpers.objResponse(true, "Sub categoria creada con exito.");
      } else {
        // Create obj data
        ResJson = Helpers.objResponse(false, "Sub categoria duplicada.");
      }
      res.json(ResJson);
    } catch (Error) {
      console.log(Error);
    }
  },
  async GetSubCategoriesByCategories(req, res) {
    try {
      const objRes = await Model.MDFindByCategory(req.params);
      res.json(Helpers.objResponse(true, objRes));
    } catch (Error) {
      console.log(Error);
    }
  },
  async PutSubCategory(req, res) {
    try {
      await Model.MDFindByIdUpdate(req.body);
      res.json({ Success: true });
    } catch (Error) {
      console.log(Error);
    }
  },
  async GetCategoriesWithSubCategories(req, res) {
    try {
      const ArrayCategory = [];
      const Data = await Model.MDGetCategoriesWithSubCategories();
      //Data initial
      //Add Category Header
      Data.forEach((Category, Index) => {
        if (Index == 0) {
          ArrayCategory.push({
            _idCategory: Category.strIdCategory._id,
            strNameCategory: Category.strIdCategory.strName,
            ArraySubCategory: [],
          });
        }
        const ArrayCategoryFilter = ArrayCategory.filter(
          (Element) => Element._idCategory == Category.strIdCategory._id
        );
        if (ArrayCategoryFilter.length == 0) {
          ArrayCategory.push({
            _idCategory: Category.strIdCategory._id,
            strNameCategory: Category.strIdCategory.strName,
            ArraySubCategory: [],
          });
        }
      });
      //Add SubCategories
      Data.forEach((SubCategory) => {
        ArrayCategory.forEach((Category) => {
          if (Category._idCategory == SubCategory.strIdCategory._id) {
            Category.ArraySubCategory.push({
              _idSubCategory: SubCategory._id,
              strNameSubCategory: SubCategory.strName,
            });
          }
        });
      });
      res.json({ Success: true, Categories: ArrayCategory });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({ Message: "Error internal server" });
    }
  },
};

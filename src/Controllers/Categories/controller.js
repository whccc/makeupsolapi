const Model = require("./model");
const Helpers = require("../../Helpers/utils");
const MDSubCategory = require("../SubCategories/model");

// Validate Data
const ValidateData = (strData) => {
  if (Helpers.ValidateData(strData.strName)) {
    return Helpers.objResponse(false, "Empty Field strName is required");
  }
  return Helpers.objResponse(true, "Fields Success");
};

module.exports = {
  // Create category
  async CreateCategories(req, res) {
    try {
      // Data web
      const { strName } = req.body;
      let objRes = {};
      // Validate data
      const objValidate = ValidateData(req.body);
      if (!objValidate.Success) {
        res.json(objValidate);
        return;
      }
      // Validate duplicate
      const objRespuesta = await Model.MDFindOne({ strName });
      if (objRespuesta == null) {
        // Create category
        Model.MDSave({ strName });
        objRes = Helpers.objResponse(true, "Categoria creada con éxito");
      } else {
        objRes = Helpers.objResponse(false, "Categoria duplicada");
      }
      res.json(objRes);
    } catch (Error) {
      console.log(Error);
    }
  },
  // Get Categories
  async GetCategories(req, res) {
    try {
      const objRes = await Model.MDFind();
      res.json(Helpers.objResponse(true, { Categories: objRes }));
    } catch (Error) {
      console.log(Error);
    }
  },
  // Get Categories Pagination
  async GetCategoriesPagination(req, res) {
    try {
      const objRes = await Model.MDFindPagination(req.body);
      res.json(Helpers.objResponse(true, { Categories: objRes }));
    } catch (Error) {
      console.log(Error);
    }
  },
  // Update Categorie By Id
  async UpdateCategorie(req, res) {
    try {
      await Model.MDFindIdUpdate(req.body);
      res.json(Helpers.objResponse(true, "Categoria actualizada con éxito."));
    } catch (Error) {
      console.log(Error);
    }
  },
  // Delete Category
  async DeleteCategorie(req, res) {
    try {
      let JsonData = {};
      const SubCategories = await MDSubCategory.MDFindByCategory({
        strIdCategory: req.body._id,
      });
      if (SubCategories.length == 0) {
        await Model.MDDeleteCategory(req.body);
        JsonData = Helpers.objResponse(true, "Category delete with Success");
      } else {
        JsonData = Helpers.objResponse(
          false,
          "Not delete category.Because the category has SubCategories"
        );
      }
      res.json(JsonData);
    } catch (Error) {
      console.log(Error);
    }
  },
};

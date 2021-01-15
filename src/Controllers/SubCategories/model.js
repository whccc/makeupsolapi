const ModelDB = require("./modelmongodb");

module.exports = {
  async MDSave({ strName, strIdCategory, strNameCategory }) {
    try {
      const SubCategory = new ModelDB({
        strName,
        strIdCategory,
        strNameCategory,
      });
      await SubCategory.save();
    } catch (Error) {
      console.log(Error);
    }
  },
  async MDFindOne({ strName, strIdCategory }) {
    try {
      const objReponse = await ModelDB.findOne({ strName, strIdCategory });
      console.log(objReponse);
      console.log(strName, strIdCategory);
      return objReponse;
    } catch (Error) {
      console.log(Error);
    }
  },
  async MDFindByCategory({ strIdCategory }) {
    const objRes = await ModelDB.find(
      { strIdCategory },
      { strName: 1, strIdCategory: 1, strNameCategory: 1 }
    ).sort({ $natural: -1 });
    return objRes;
  },
  async MDFindByIdUpdate({ _id, strName }) {
    await ModelDB.findByIdAndUpdate({ _id }, { strName });
  },
};

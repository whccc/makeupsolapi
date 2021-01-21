const MDOrder = require("./modelmongodb");

module.exports = {
  async MDSetOrderFinish({
    strNameUser,
    strPhoneUser,
    strEmailUser,
    ArrayProducts,
  }) {
    try {
      const SaveOrder = new MDOrder({
        strNameUser,
        strPhoneUser,
        strEmailUser,
        ArrayProducts,
      });
      await SaveOrder.save();
    } catch (Error) {
      throw Error;
    }
  },
};

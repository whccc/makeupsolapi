const MDOrder = require("./model");

module.exports = {
  async PostOrderFinish(req, res) {
    try {
      await MDOrder.MDSetOrderFinish(req.body);
      res.json({
        Success: true,
      });
    } catch (Error) {
      console.log(Error);
      res.status(500).json("Error internal server");
    }
    console.log(req.body);
  },
};

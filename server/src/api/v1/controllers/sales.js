const Sales = require("../models/sales");

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sales.find({});
    return res.json(sales);
  } catch (error) {
    return res.json({
      message: "No sales found in DB",
    });
  }
};

exports.createSales = async (req, res) => {
  try {
    const sales = await Sales.create(req.body);
    await sales.save();

    return res.json({ message: "Sales added successfully" });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create sales in DB",
    });
  }
};

exports.updateSales = async (req, res) => {
  try {
    const sales = await Sales.findByIdAndUpdate(
      { _id: req.body._id },
      { $set: req.body },
      { new: true, useFindAndModify: false }
    );
    await sales.save();
    return res.json({
      message: "Sales updation successfull",
    });
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({
      message: "Failed to update sales in DB",
    });
  }
};

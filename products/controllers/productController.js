const mongoose = require("mongoose");
const productModel = require("../models/productModel");
const product = mongoose.model("Product", productModel);


const viewProduct = async (req, res, next) => {

    res.status(200).json({ message: "view api called" });
  
  //   let productId = req.query.id;
  //   try {
  //     let result = await product.findOne({ _id: productId });
  //     if (result) {
  //       res.status(200).json({ message: "Product fetched successfully.", data: [result] });
  //     } else {
  //       res.status(500).json({ message: "Invalid id" });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  };
module.exports = {viewProduct};
//Include express functionalities
const app = require("express").Router();
const verifyToken = require("../middleware/auth");

const {
    viewProduct,
} = require("../controllers/productController");


app.get('/',verifyToken, viewProduct);

module.exports = app;
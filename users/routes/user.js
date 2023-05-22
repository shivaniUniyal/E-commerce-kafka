//Include express functionalities
const app = require("express").Router();
// const { verifyToken } = require("../middleware/auth");
const {
    signup,
} = require("../controllers/userCredential");

app.get("/", signup);

module.exports = app;



const mongoose = require("mongoose");

//Including  user model here
const userModel = require("../models/userModel");

//Including validation middleware here
// const validator = require("../middleware/validation");

//Creating new user
const user = mongoose.model("User", userModel);

//Including bcrypt for hash the password
const bcrypt = require("bcrypt");

//Including jsonwebtoken for token generate
const jwt = require("jsonwebtoken");
// const producer = require("../producer");

//=======================================SIGN UP FUNCTION===========================================================
const signup = async (req, res, next) => {

    let customer = req.body;
    res.send("sign-up api called");
   // try {
    //     let data = {
    //         username: customer.username,
    //         email: customer.email,
    //         password: customer.password,
    //         confirmPassword: customer.confirmPassword,
    //         phone: customer.phone,
    //     };

    //     let error = validator.isRequired(data);

    //     if (error.length > 0) {
    //         res.status(400).json({ error: error });
    //     } else {
    //         let encryptedPassword = await bcrypt.hash(customer.password, 10);
    //         customer.password = encryptedPassword;
    //         let newUser = new user(customer);
    //         let result = await newUser.save();
    //         // Create token
    //         let user_email = result.email;

    //         const token = jwt.sign(
    //             {
    //                 user_id: result._id,
    //                 user_email,
    //             },
    //             process.env.TOKEN_KEY,
    //             {
    //                 expiresIn: "2h",
    //             }
    //         );
    //         // save user token
    //         customer.token = token;
    //         res.status(200).json({
    //             message: "Signed up successfully",
    //             data: {
    //                 id: customer._id,
    //                 username: customer.username,
    //                 email: customer.email,
    //                 phone: customer.phone,
    //                 token: customer.token,
    //                 createdAt: customer.createdAt,
    //                 updatedAt: customer.updatedAt,
    //             },
    //         });
    //     }
    // } catch (err) {
    //     res.status(400).json({ error: err.message });
    // }

}

module.exports = {signup};
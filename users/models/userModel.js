const mongoose = require("mongoose");
const user = mongoose.Schema(
  {
    username: {
      type: String,
      validate: {
        validator: (v) => {
          return /^[a-zA-Z ]{3,30}$/.test(v);
        },
        message: "Please enter a valid user name",
      },
      required: [true, "User name is required"],
    },
    email: {
        type: String,
        unique:true,
        validate: {
          validator: (v) => {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
          },
          message: "Please enter a valid email address",
        },
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password field  is required"],
    },
    phone: {
        type: String,
        unique:true,
        validate: {
          validator: (v) => {
            return   /^[0-9]{10}$/.test(v);
          },
          message: "Please enter a valid phone number",
        },
        required:[true,"Phone number is required"],
    },
    isAdmin:{
      type:Boolean,
      default:false,
    },
    isAcive:{
      type:Boolean,
      default:true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports=user;
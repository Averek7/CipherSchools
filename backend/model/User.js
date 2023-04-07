const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      // required: true,
    },
    dob: {
      type: Date,
      // required: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);
module.exports = User;

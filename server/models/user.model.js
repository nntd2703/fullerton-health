// user.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Users = new Schema(
  {
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    permission: {
      type: Array,
    },
    name: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", Users);

const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require("./routers/users.route");

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRoute);

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});

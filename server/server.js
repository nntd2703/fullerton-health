const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri =
  "mongodb+srv://paddington29:paddington29@cluster0.mdr6i.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("collection", collection);
  client.close();
});

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});

const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongodb://localhost:27017/nodeapi
mongoose.connect(
  "mongodb://bandeira:Zaq!$%145@ds047642.mlab.com:47642/heroku_q3h3f7s8",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

requireDir("./src/model");

//const Product = mongoose.model("Product");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);

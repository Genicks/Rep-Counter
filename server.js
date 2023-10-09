//! Imports
const express = require("express");
const mongoose = require("mongoose");
const Exercise = require("./models/exercise");
const exerciseRouter = require("./routes/exerciseRouter");
const router = require("./routes/exerciseRouter");
require("dotenv").config();

//! Database connetion
const connectdb = new Promise((resolve, reject) => {
  resolve(mongoose.connect(process.env.DATA));
})
  .then(() => {
    console.log("Database connected sucessfull");
  })
  .catch((err) => {
    console.error("Database Connection Failed:", err);
  });

// //! Application
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/", router);

//! Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

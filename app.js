const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// const path = require("path");
const cors = require("cors");


const errorMiddleware = require("./middleware/error");

app.use(cors({
    origin: "*"
}))
require("dotenv").config();

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");


app.use("/", product);



// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;

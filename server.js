require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI ||
        "mongodb://user1:password1@ds259347.mlab.com:59347/heroku_6dzprnm3",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

// Use apiRoutes
app.use(routes);

// If no API routes are hit, send the React app
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// listen for server
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

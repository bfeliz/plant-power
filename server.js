const express = require("express");
// const path = require("path");
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
    process.env.MONGODB_URI || "mongodb://localhost/reactrecipes",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
app.use(routes);

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

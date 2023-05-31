const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./Routes/");

const app = express();

app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;

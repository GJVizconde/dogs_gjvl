const { Router } = require("express");
const { getTemperamentsHandler } = require("../handlers/index");
const temperamentRouter = Router();

temperamentRouter.get("/", getTemperamentsHandler);

module.exports = temperamentRouter;

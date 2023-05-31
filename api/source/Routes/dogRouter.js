const { Router } = require("express");
const {
  getDogsHandler,
  getDogHandler,
  createDogHandler,
} = require("../handlers/index");

const dogRouter = Router();

dogRouter.get("/", getDogsHandler);
dogRouter.post("/", createDogHandler);
dogRouter.get("/:id", getDogHandler);

module.exports = dogRouter;

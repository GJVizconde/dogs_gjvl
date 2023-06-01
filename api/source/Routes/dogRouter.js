const { Router } = require("express");
const {
  getDogsHandler,
  getDogHandler,
  createDogHandler,
} = require("../handlers/index");

const dogRouter = Router();

dogRouter.get("/", getDogsHandler);
dogRouter.get("/:id", getDogHandler);
dogRouter.post("/", createDogHandler);

module.exports = dogRouter;

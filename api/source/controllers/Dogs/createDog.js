const { Dog } = require("../../db");

const createDog = async ({ name, height, weight, life_span, image }) => {
  const newDog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image,
  });

  return newDog;
};
module.exports = createDog;

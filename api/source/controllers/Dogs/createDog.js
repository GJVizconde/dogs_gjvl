const { Dog, Temperament } = require("../../db");

const createDog = async ({
  name,
  height,
  weight,
  life_span,
  image,
  temperaments,
}) => {
  const newDog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image,
  });

  // console.log(newDog);

  await newDog.addTemperaments(temperaments);

  return newDog;
};

module.exports = createDog;

const { createDog } = require("../../controllers/index");

const createDogHandler = async (req, res) => {
  console.log(req.body);
  const { name, height, weight, life_span, image } = req.body;
  console.log(name, height, weight, life_span, image);

  const newDog = await createDog({ name, height, weight, life_span, image });

  res.status(200).json(newDog);

  try {
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = createDogHandler;

const { getDogById } = require("../../controllers/index");

const getDogHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  console.log(id, source);
  try {
    const Dog = await getDogById(id, source);
    res.status(200).json(Dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogHandler;

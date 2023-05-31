const { Sequelize } = require("sequelize");
const DogModel = require("./models/Dog");
const TemperamentModel = require("./models/Temperament");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, BDD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`,
  { logging: false }
);

DogModel(sequelize);
TemperamentModel(sequelize);

// console.log(sequelize.models); //!CONSOLE Check Sequelize tiene los models

const { Dog, Temperament } = sequelize.models;

Dog.belongsToMany(Temperament, { through: "dogTemperament" });
Temperament.belongsToMany(Dog, { through: "dogTemperament" });

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};

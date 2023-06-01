const axios = require("axios");
const { Temperament } = require("../../db");

const uniquesArray = (array, prop) => {
  const newArray = [];
  for (let i = 0; i < array?.length; i++) {
    const nivel1 = array[i][prop];
    for (let j = 0; j < nivel1?.length; j++) {
      const nivel2 = nivel1[j];
      if (!newArray.includes(nivel2)) {
        newArray.push(nivel2);
      }
    }
  }
  return newArray;
};

const getAllTemperaments = async () => {
  const apiDogsRaw = (await axios.get("https://api.thedogapi.com/v1/breeds"))
    .data;

  const tempsArray = apiDogsRaw.map((dog) => {
    return {
      temperaments: dog?.temperament?.split(","),
    };
  });

  //   console.log(apiDogsRaw);

  //   console.log(tempsArray); //! CONSOLE. Check tempsArray

  const temperamentsArrayRaw = uniquesArray(tempsArray, "temperaments");

  const temperamentsArray = temperamentsArrayRaw.map((elem) => elem.trim());

  const temperamentSort = temperamentsArray.slice().sort();

  //   console.log(temperamentsArray); //! CONSOLE. Check todos los temperamentos

  //Opcion 1
  // temperamentsArray.forEach((temperamento) => {
  //   Temperament.create({ name: temperamento })
  //     .then((temperamentoCreado) => {
  //       console.log("Temperamento creado:", temperamentoCreado.name);
  //     })
  //     .catch((error) => {
  //       console.error("Error al crear el temperamento:", error);
  //     });
  // });

  //OPTION 2

  const temperamentObj = temperamentSort.map((temp, index) => {
    return {
      id: index + 1,
      name: temp,
    };
  });

  // console.log(temperamentObj);

  await Temperament.bulkCreate(temperamentObj);

  return temperamentObj;
};

module.exports = getAllTemperaments;

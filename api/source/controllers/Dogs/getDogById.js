const axios = require("axios");

const getDogById = async (id, source) => {
  //   const convertirAObjeto = (arr) => {
  //     const converting = arr.map((elem) => {
  //       return {
  //         name: elem,
  //       };
  //     });
  //     return converting;
  //   };

  const cleanDogs = (arr) => {
    const cleaning = arr.map((elem) => {
      return {
        id: elem.id,
        name: elem.name,
        weight: elem?.weight?.metric ? elem?.weight?.metric : "",
        height: elem?.height?.metric ? elem?.height?.metric : "",
        life_span: elem?.life_span,
        image: elem?.image?.url,
        temperament: elem?.temperament?.split(",").map((elem) => {
          return {
            name: elem,
          };
        }),
        created: "false",
      };
    });
    return cleaning;
  };

  if (source === "api") {
    const apiDogsRaw = (await axios.get("https://api.thedogapi.com/v1/breeds"))
      .data;

    // console.log(Array.isArray(apiDogsRaw));

    const cleaned = cleanDogs(apiDogsRaw);

    const findedDog = cleaned.filter((dog) => dog.id === Number(id));

    // console.log(findedDog);

    // console.log(cleaned);

    return findedDog;
  }
};

module.exports = getDogById;

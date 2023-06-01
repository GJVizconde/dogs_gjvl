require("dotenv").config();
const app = require("./source/app");
const { conn } = require("./source/db");

const port = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
  });
});

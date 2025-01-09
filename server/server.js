require("dotenv").config();
const port = process.env.PORT || 5003;

const app = require("./app");

const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`Serveris veikia. Prievadas: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();

require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5003;
const cors = require("cors");

const app = express();

// endpointai
const userRouter = require("./router/user.router");
const productRouter = require("./router/product.router");

// Midlvares visokios
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

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

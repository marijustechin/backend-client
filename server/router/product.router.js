const Router = require("express").Router;

const productRouter = new Router();

productRouter.get("/", () => {});
productRouter.post("/", () => {});
productRouter.put("/:id", () => {});
productRouter.delete("/:id", () => {});

module.exports = productRouter;

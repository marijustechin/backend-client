const Router = require("express").Router;
const userController = require("../controller/user.controller");

const userRouter = new Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;

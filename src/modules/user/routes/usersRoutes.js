const express = require("express");
const userController = require("../controllers/usersController.js");
const userRouter = express.Router();


userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUsers);
userRouter.delete("/", userController.deleteUsersController)


module.exports = userRouter;
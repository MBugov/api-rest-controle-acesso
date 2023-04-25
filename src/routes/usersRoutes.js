const express = require("express");
const userController = require("../modules/user/controllers/usersController.js");
const userRouter = express.Router();


userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUsers);


module.exports = userRouter;
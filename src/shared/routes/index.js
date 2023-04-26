const express = require("express");
const userRouter = require("../../modules/user/routes/usersRoutes");

const appRouter = express();

appRouter.use("/user", userRouter);

module.exports = appRouter;
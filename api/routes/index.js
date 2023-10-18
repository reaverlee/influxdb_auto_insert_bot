const express = require("express");
const routes = express.Router();

const dataStressTestRouter = require("./dataStressTestRouter");

routes.use("/stressTest", dataStressTestRouter.dataStressTestRouter);

module.exports = routes;

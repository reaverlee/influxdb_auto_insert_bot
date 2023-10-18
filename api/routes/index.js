const express = require("express");
const routes = express.Router();

const dataStressTestRouter = require("./dataStressTestRouter");
const dataViewRouter = require("./dataViewRouter");



routes.use ("/view",dataViewRouter.dataViewRouter);

routes.use("/stressTest", dataStressTestRouter.dataStressTestRouter);

module.exports = routes;

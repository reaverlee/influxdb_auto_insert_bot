const express = require("express");
const dataStressTestRouter = express.Router();
const dataStressTestController = require("../controllers/dataStressTestController");

dataStressTestRouter.post(
  "/",
  dataStressTestController.dataStressTestController
);

module.exports = { dataStressTestRouter };

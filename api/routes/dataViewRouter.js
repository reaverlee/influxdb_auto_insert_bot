const express = require("express");
const dataViewRouter = express.Router();
const dataViewController = require("../controllers/dataViewController");

dataViewRouter.get("/select",dataViewController.dataView);
dataViewRouter.delete("/delete/:timestamp",dataViewController.deletedData);

module.exports = {dataViewRouter};
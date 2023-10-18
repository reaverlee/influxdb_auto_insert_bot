require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const routes = require("./api/routes/index");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(routes);

app.get("/ping", function (req, res) {
  res.status(200).json({ message: "pong" });
});

const checkInfluxDBHealth = async () => {
  try {
    const response = await axios.get(`${process.env.INFLUX_HOST_URL}/health`);
    if (response.status === 204) {
      console.log("InfluxDB is healthy");
    } else {
      console.log("InfluxDB health status:", response.status);
    }
  } catch (error) {
    console.error("Error checking InfluxDB health:", error);
  }
};

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  await checkInfluxDBHealth();
  console.log(`Listening to request on port: ${PORT}`);
});

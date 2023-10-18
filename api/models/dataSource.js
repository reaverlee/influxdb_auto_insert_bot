const { InfluxDB } = require("@influxdata/influxdb-client");
const axios = require("axios");

const getToken = async () => {
  try {
    const accessToken = await axios.get(process.env.INFLUXDB_TOKEN_URL, {
      headers: {
        Authorization: `Token ${process.env.INFLUX_TOKEN}`,
        "Content-type": "application/json",
      },
    });
    return accessToken.data.authorizations[0].token;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const initializeInflux = async () => {
  const token = await getToken();
  const client = new InfluxDB({
    url: process.env.INFLUX_HOST_URL,
    token: token,
  });
  const influx = client.getWriteApi(
    process.env.INFLUX_ORG,
    process.env.INFLUXDB_BUCKET
  );
  return influx;
};

module.exports = { initializeInflux, getToken };

const { Point } = require("@influxdata/influxdb-client");
const { initializeInflux } = require("./dataSource");

const insertData = async (temp, humi, THI, pm10, pm25, pm1, co2, tvoc, o2) => {
  try {
    const influx = await initializeInflux();

    const point = new Point("test_table_second")
      .tag("dev_id", "6363")
      .floatField("temp", temp)
      .floatField("humi", humi)
      .floatField("THI", THI)
      .floatField("pm10", pm10)
      .floatField("pm25", pm25)
      .floatField("pm1", pm1)
      .floatField("co2", co2)
      .floatField("tvoc", tvoc)
      .floatField("o2", o2);

    const result = await influx.writePoint(point);
    return result;
  } catch (error) {
    console.error(`Error Message: ${error}`);
    throw error;
  }
};

module.exports = { insertData };

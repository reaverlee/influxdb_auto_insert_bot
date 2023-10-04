const { InfluxDB, Point } = require("@influxdata/influxdb-client");

const token =
  "5jW-CW1XbrDXn3qlCVK2d6_eCwYzxUTHdgWxSvQ5SeccQqCct1NrgxSlHVlq_C8QnjWE8jNM2IQXd-PxQEBsMw==";
const org = "bacf0ed090bbf72f";
const bucket = "test";

const client = new InfluxDB({ url: "http://192.168.0.101:8086", token });

const influx = client.getWriteApi(org, bucket);

const insertData = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const temp = random(17, 23);
  const humi = random(61, 66);
  const THI = random(1, 5);
  const pm10 = random(7, 12);
  const pm25 = random(7, 12);
  const pm1 = random(7, 12);
  const co2 = random(1066, 1071);
  const tvoc = random(112, 118);
  const o2 = random(16, 21);

  const point = new Point("test_table")
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

  influx.writePoint(point);
  influx
    .close()
    .then(() => {
      console.log("데이터가 성공적으로 삽입되었습니다.");
    })
    .catch((error) => {
      console.error(`데이터 삽입 중 오류 발생: ${error}`);
    });
};

insertData();

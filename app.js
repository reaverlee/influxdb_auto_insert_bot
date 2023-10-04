require("dotenv").config();
const express = require('express');
const Influx = require('influx'); 
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

const port = process.env.PORT || 3000; 


const influx = new Influx.InfluxDB({
  host: process.env.INFLUXDB_HOST || '192.168.0.101:8086', 
  database: process.env.INFLUXDB_DATABASE || 'test', 
  username: process.env.INFLUXDB_USERNAME || 'admin', 
  password: process.env.INFLUXDB_PASSWORD || 'Bizmyhand1!', 
  port: process.env.INFLUXDB_PORT || 8086, // 포트 설정
});


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

  influx
    .writePoints([
      {
        measurement: "test_table",
        tags: { dev_id: "6363" },
        fields: {
          temp: temp,
          humi: humi,
          THI: THI,
          pm10: pm10,
          pm25: pm25,
          pm1: pm1,
          co2: co2,
          tvoc: tvoc,
          o2: o2,
        },
      },
    ])
    .then(() => {
      console.log("데이터가 성공적으로 삽입되었습니다.");
    })
    .catch((err) => {
      console.error(`데이터 삽입 중 오류 발생: ${err}`);
    });
};

insertData();

setInterval(insertData, 60000);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

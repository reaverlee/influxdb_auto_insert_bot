const dataStressTestDao = require("../models/dataStressTestDao");
const { random } = require("../utils/randomValue");

let intervalTest;

const insertData = async () => {
  const temp = await random(17, 23);
  const humi = await random(61, 66);
  const THI = await random(1, 5);
  const pm10 = await random(7, 12);
  const pm25 = await random(7, 12);
  const pm1 = await random(7, 12);
  const co2 = await random(1066, 1071);
  const tvoc = await random(112, 118);
  const o2 = await random(16, 21);

  try {
    await dataStressTestDao.insertData(
      temp,
      humi,
      THI,
      pm10,
      pm25,
      pm1,
      co2,
      tvoc,
      o2
    );
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

// const intervalTest = setInterval(insertData, 100);

// const dataStressTest = async () => {
//   try {
//     const temp = await random(17, 23);
//     const humi = await random(61, 66);
//     const THI = await random(1, 5);
//     const pm10 = await random(7, 12);
//     const pm25 = await random(7, 12);
//     const pm1 = await random(7, 12);
//     const co2 = await random(1066, 1071);
//     const tvoc = await random(112, 118);
//     const o2 = await random(16, 21);

//     await dataStressTestDao.insertData(
//       temp,
//       humi,
//       THI,
//       pm10,
//       pm25,
//       pm1,
//       co2,
//       tvoc,
//       o2
//     );
//     // setInterval(() => insertData(), 100);
//     const message = { message: "Success Insert Data " };
//     return message;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

module.exports = {
  startInterval: () => {
    if (!intervalTest) {
      intervalTest = setInterval(insertData, 100);
    }
  },
  insertData,
};

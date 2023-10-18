const dataStressTestService = require("../services/dataStressTestService");

const dataStressTestController = async (req, res) => {
  try {
    // await dataStressTestService.startInterval();
    await dataStressTestService.insertData();

    const message = { message: "Success Insert Data " };
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dataStressTestController };

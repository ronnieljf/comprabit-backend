const StatusCodes = require("../constants/status.codes");
const testService = require("../services/test.service");

const test = async (req, res) => {
  const hello = await testService.test();
  return res.status(StatusCodes.OK).json(hello);
};

const myName = async (req, res) => {
  const name = await testService.myName();
  return res.status(StatusCodes.OK).json(name);
};

module.exports = {
  test,
  myName,
};

const StatusCodes = require("../constants/status.codes");
const pricesService = require("../services/prices.service");

const getPrice = async (req, res) => {
  const price = await pricesService.price(req.body.currency);
  return res.status(StatusCodes.OK).json(price);
};

module.exports = { getPrice };

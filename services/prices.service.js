const axios = require("axios");

const price = async (currencie = "BTCUSDT") => {
  // const currencies = ["BTCUSDT", "DOGEUSDT", "LTCUSDT", "ETHUSDT"];
  const price = await axios.get(
    process.env.API_BINANCE + "ticker/price?symbol=" + currencie
  );
  return price.data;
};

module.exports = { price };

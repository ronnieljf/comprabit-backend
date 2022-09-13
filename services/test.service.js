const HelloWorld = require("../models/hello-world.model");
const test = async () => {
  const hello = new HelloWorld("World");
  return hello;
};

module.exports = {
  test,
};

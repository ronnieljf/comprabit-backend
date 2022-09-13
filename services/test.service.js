const HelloWorld = require("../dto/hello-world.dto");
const test = async () => {
  const hello = new HelloWorld("World");
  return hello;
};

module.exports = {
  test,
};

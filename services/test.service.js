const HelloWorldDTO = require("../dto/hello-world.dto");
const test = async () => {
  const hello = new HelloWorldDTO("World");
  return hello;
};

module.exports = {
  test,
};

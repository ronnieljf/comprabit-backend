const HelloWorldDTO = require("../dto/hello-world.dto");
const test = async () => {
  const hello = new HelloWorldDTO("World");
  return hello;
};

const myName = async () => {
  const name = new HelloWorldDTO("Nailet");
  return name;
};

module.exports = {
  test,
  myName,
};

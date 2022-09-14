const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env[process.env.MONGO_ENV], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error in database connection");
  }
};

module.exports = {
  connect,
};

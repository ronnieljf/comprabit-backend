const start = async () => {
  //
  require("dotenv").config();
  const express = require("express");
  const cors = require("cors");
  const bodyParser = require("body-parser");
  const cookieParser = require('cookie-parser');
  const app = express();
  const port = process.env.APP_PORT;
  require("./database/mongo").connect();
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
  app.use(bodyParser.json({ limit: "100mb" }));
  app.use("/api/v1", require("./routes/router"));

  app.listen(port, () => {
    console.log("CompraBit Server is running in port", port);
  });
};
start();

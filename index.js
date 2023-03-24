const start = async () => {
  //
  require("dotenv").config();
  const fs = require("fs");
  const express = require("express");
  const cors = require("cors");
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");
  const swaggerUi = require("swagger-ui-express");
  const app = express();
  const port = process.env.APP_PORT;
  require("./database/mongo").connect();

  let swaggerJson = fs.readFileSync(process.cwd() + "/doc/swagger.json");
  swaggerJson = JSON.parse(swaggerJson);
  let swaggerRoute = "";
  if (process.env.ENV == "LOCAL") {
    swaggerRoute = "/api-docs";
    swaggerJson.host = "localhost:" + port;
    swaggerJson.basePath = "/api/v1";
    swaggerJson.schemes = ["http"];
  } else if (process.env.ENV == "DEV") {
    swaggerRoute = "/api-docs";
    swaggerJson.host = "143.198.68.76";
    swaggerJson.basePath = "/backend/api/v1";
    swaggerJson.schemes = ["http"];
  } else {
    swaggerRoute = "/api-docs";
    swaggerJson.host = "143.198.68.76";
    swaggerJson.basePath = "/backend/api/v1";
    swaggerJson.schemes = ["https"];
  }

  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
  app.use(bodyParser.json({ limit: "100mb" }));
  app.use(swaggerRoute, swaggerUi.serve, swaggerUi.setup(swaggerJson));
  app.use("/api/v1", require("./routes/router"));
  app.listen(port, () => {
    console.log("CompraBit Server is running in port", port);
  });
};
start();

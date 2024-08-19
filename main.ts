import http from "http";
import express from "express";
import ConnectToDB from "./utils/db";
import mainRouter from "./routes";

async function RunServer() {
  // create app & server
  const app = express();
  const server = http.createServer(app);
  app.use(express.json());

  app.use(mainRouter);

  // connecto to db and run server
  await ConnectToDB();
  server.listen(8080);
}

RunServer();

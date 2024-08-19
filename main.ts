import http from "http";
import express from "express";
import ConnectToDB from "./utils/db";

async function RunServer() {
  // create app & server
  const app = express();
  const server = http.createServer(app);

  // connecto to db and run server
  await ConnectToDB();
  server.listen(8080);
}

RunServer();

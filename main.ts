import http from "http";
import express from "express";

async function RunServer() {
  // create app & server
  const app = express();
  const server = http.createServer(app);

  // test server
  app.use((req, res, next) => {
    res.json({ message: "OK" });
  });
  // run server
  server.listen(8080);
}

RunServer();

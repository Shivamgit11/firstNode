const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middlerware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middlerware");
  res.send('<h1>Hellow from Express</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);


app.listen(3000);
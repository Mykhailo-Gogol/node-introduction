const express = require("express");
const http = require("http");
const fs = require("fs").promises;
const port = 3000;

// const handleRequest = async (request, response) => {
//   const file = await fs.readFileSync("./package.json", "utf8");

//   if (request.url.indexOf("/home") >= 0) {
//     response.writeHead(200, { "Content-Type": "text/json" });
//     // response.end("<h1>GOIT</h1>");
//     response.write(file);
//     // response.end(file);
//   }
//   // response.end(file);
// };

// const server = http.createServer(handleRequest);

// // http - 80
// // https - 443
// server.listen(port, (err) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log(`Listening on port ${port}`);
// });

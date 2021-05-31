// const express = require("express");
// const path = require("path");

// const app = express();

// const myRouter = require("./my-router");

// app.use("/my-router", myRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// app.get("/con?tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// app.get("/con+tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// app.get("/con*tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// app.all("/anything", (req, res, next) => {
//   console.log("Anything method.");
//   next(); // передаем управление дальше
// });

// app.use((req, res, next) => {
//   console.log("Наше промежуточное ПО");
//   next();
// });

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });

// app.use(express.static(path.join(__dirname + "/public")));

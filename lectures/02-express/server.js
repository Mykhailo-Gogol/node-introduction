const express = require("express");
const morgan = require("morgan");
// const fs = require("fs").promises;

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Listen on port 3000");
});

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("get request");
});

app.post("/post", (req, res) => {
  console.log(req.body);

  if (!req.body.goit) {
    return res.status(400);
  }

  res.send("get request");
  res.redirect("/");
});

// app.delete("/", (req, res) => {
//   res.send("delete request");
// });

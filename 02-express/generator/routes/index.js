const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");

const { articles } = require("../data/data.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});
router.post("/contact", async function (req, res, next) {
  await fs.writeFile(
    path.join(__dirname, "..", "data", "message.json"),
    JSON.stringify(req.body, null, 2)
  );

  res.redirect("/");
});

router.get("/blog", function (req, res, next) {
  res.render("blog", { title: "My Blog", articles });
});

module.exports = router;

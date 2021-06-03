// const { getCurrentDate } = require("./dateUtils");

// const Calc = require("calc-js").Calc;

// console.log(getCurrentDate());

// console.log(process.argv);

// const [node, index, a, b] = process.argv;

// const a = process.argv[2];

// const b = process.argv[3];

// console.log(new Calc(parseFloat(a)).sum(parseFloat(b)).finish());

// const path = require("path");

// const pathName = path.resolve("dateUtils.js");

// const pathName1 = "/date.txt";

// console.log(pathName);

// const fs = require("fs");

// relative

// fs.readFile("./date.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(data);
// });

// console.log("123");

// fs.readFile("./date.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(data);
// });

// absolute
// async // snapshot ->>>

// console.log("123");

// absolute

// fs.readFile(fs.resolve('./date.txt'), "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(data);
// });

// tmp/controler/roots

// const fs = require("fs").promises;

// const path = require("path");

// async
// (async () => {
//   try {
//     const data = await fs.readFile("./date.txt", "utf8");

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// })();

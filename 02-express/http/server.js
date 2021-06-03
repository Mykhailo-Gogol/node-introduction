// Base

const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const path = require("path");
const query_string = require("querystring");

const TypeMime = {
  ".html": "text/html",
  ".htm": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".ico": "image/x-icon",
};

http
  .createServer(async (req, res) => {
    const myUrl = url.parse(req.url);
    const pathname = myUrl.pathname;
    let fileName = pathname.substring(1);

    switch (pathname) {
      case "/":
        fileName = "index.html";
        break;

      case "/blog":
        fileName = "blog.html";
        break;

      case "/contact":
        fileName = "contact.html";
        break;

      default:
        break;
    }

    if (pathname === "/contact" && req.method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", async () => {
        const parsedBody = decodeURIComponent(Buffer.concat(body).toString());
        console.log(parsedBody);
        const parsedObject = query_string.parse(parsedBody);
        console.log(parsedObject);
        await fs.writeFile(
          "message.json",
          JSON.stringify(parsedObject, null, 2)
        );
      });
      res.statusCode = 302;
      res.setHeader("Location", "/contact");

      res.end();
    }

    const type = TypeMime[path.extname(fileName)];

    if (type?.includes("image")) {
      try {
        const image = await fs.readFile(fileName);
        res.writeHead(200, { "Content-Type": type });
        res.write(image, "hex");
        res.end();
      } catch (error) {
        console.log(error.message);
        res.writeHead(404, { "Content-Type": "text/plain" });

        res.end();
      }
    } else {
      try {
        const content = await fs.readFile(fileName, "utf8");
        res.writeHead(200, { "Content-Type": type });
        res.write(content);

        res.end();
      } catch (error) {
        console.log(error.message);
        if (!type || type === "text/html") {
          const content = await fs.readFile("404.html", "utf8");
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(content);
          res.end();
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
        }
        res.end();
      }
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });

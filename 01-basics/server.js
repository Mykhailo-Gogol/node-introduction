const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello Ozzy !");
});

server.listen(port, () => {
  console.log(`Сервер ожидает соединения на порте: ${port}`);
});

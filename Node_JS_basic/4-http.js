const app = require('http');

const host = 'localhost';
const port = 1245;

const requestListener = function servers(req, res) {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const server = app.createServer(requestListener);
// eslint-disable-next-line
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
module.exports = app;

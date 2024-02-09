const http = require('http');

// const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

// eslint-disable-next-line
app.listen(port, () => {
  console.log(`Server is running on http://${port}`);
});
module.exports = app;

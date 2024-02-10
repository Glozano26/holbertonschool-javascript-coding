const http = require('http');

const countStudents = require('./3-read_file_async.js');

const port = 1245;

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        readFile(process.argv[2], 'utf8', (err, data) => {
            
            const students = countStudents(data);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`This is the list of our students\n${students}`);
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://${port}`);
});

module.exports = app;

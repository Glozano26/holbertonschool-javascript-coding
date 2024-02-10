const http = require('http');
const parseCSV = require('csvtojson'); // Use external library for structured parsing

const port = 1245;
const csvFile = process.argv[2]; // Access database name from argument

function countStudents(csvPath) {
  return parseCSV() // Use promises for cleaner async handling
    .fromFile(csvPath)
    .then((data) => {
      // Filter out empty lines and invalid students
      const students = data.filter((student) => student.length > 0 && student.hasOwnProperty('First Name'));

      const totalStudents = students.length;
      const CSStudents = students.filter((student) => student['Program'] === 'CS');
      const SWEStudents = students.filter((student) => student['Program'] === 'SWE');

      return { totalStudents, CSStudents, SWEStudents };
    });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(csvFile)
      .then((students) => {
        const { totalStudents, CSStudents, SWEStudents } = students;

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalStudents}\n`);
        res.write(`Number of students in CS: ${CSStudents.length}. List: ${CSStudents.map((student) => student['First Name']).join(', ')}\n`);
        res.write(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.map((student) => student['First Name']).join(', ')}\n`);
        res.end();
      })
      .catch((error) => {
        console.error(error);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error\n');
      });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found\n');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

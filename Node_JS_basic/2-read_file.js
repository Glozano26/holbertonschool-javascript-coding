/* eslint-enable */
function countStudents(pathData) {
  try {
    // eslint-disable-next-line
    const fs = require('fs');
    const data = fs.readFileSync(pathData, 'utf-8').split('\n');
    const students = [];

    for (let i = 1; i < data.length; i += 1) {
      const [firstname, lastname, age, field] = data[i].trim().split(',');
      // eslint-disable-next-line
      students.push({firstname, lastname, age, field });
    }

    const CSStudents = students.filter((student) => student.field === 'CS');
    const SWEStudents = students.filter((student) => student.field === 'SWE');

    console.log('Number of students:', students.length);
    console.log('Number of students in CS:', CSStudents.length, 'List:', CSStudents.map((student) => student.firstname).join(', '));
    console.log('Number of students in SWE:', SWEStudents.length, 'List:', SWEStudents.map((student) => student.firstname).join(', '));
  } catch (error) {
    throw new Error('Cannot load the database: ', `${error}`);
  }
}
module.exports = countStudents;
/* eslint-enable */

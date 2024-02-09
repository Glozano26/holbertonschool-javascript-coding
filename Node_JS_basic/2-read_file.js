const fs = require('fs');

function countStudents(pathData) {
  try {
    const data = fs.readFileSync(pathData, 'utf-8').trim().split('\n');
    const students = [];
    // console.log(data);
    for (let i = 1; i < data.length; i += 1) {
      const [firstname, lastname, age, field] = data[i].trim().split(',');

      students.push({
        firstname,
        lastname,
        age,
        field,
      });
    }

    const CSStudents = students.filter((student) => student.field === 'CS');
    const SWEStudents = students.filter((student) => student.field === 'SWE');

    console.log('Number of students:', String(students.length));
    console.log('Number of students in CS:', String(CSStudents.length), 'List:', CSStudents.map((student) => student.firstname).join(', '));
    console.log('Number of students in SWE:', String(SWEStudents.length), 'List:', SWEStudents.map((student) => student.firstname).join(', '));
  } catch (error) {
    throw new Error('Cannot load the database: ', `${error}`);
  }
}
module.exports = countStudents;

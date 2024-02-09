const fs = require('fs');

function countStudents(pathData) {
  try {
    const data = fs.readFileSync(pathData, 'utf-8').trim().split('\n');
    const CSStudents = [];
    const SWEStudents = [];

    for (let student of data) {
      student = student.split(',');
      if (student[3] === 'CS') {
        CSStudents.push(student[0]);
      } else if (student[3] === 'SWE') {
        SWEStudents.push(student[0]);
      }
    }

    console.log(`Number of students: ${CSStudents.length + SWEStudents.length}`);
    console.log(`Number of students in CS: ${CSStudents.length}. List: ${CSStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database: ', `${error}`);
  }
}
module.exports = countStudents;

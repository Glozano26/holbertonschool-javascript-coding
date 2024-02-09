const fs = require('fs');

async function countStudents(pathData) {
  return new Promise((resolve, reject) => {
    if (pathData) {
      fs.readFile(pathData, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const students = data.trim().split('\n');
          const CSStudents = [];
          const SWEStudents = [];
          for (let student of students) {
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
          resolve();
        }
      });
    } else {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;

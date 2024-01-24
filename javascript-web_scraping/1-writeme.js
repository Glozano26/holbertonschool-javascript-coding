#!/usr/bin/node

const fs = require('fs');

const msj = 'Python is cool';

fs.writeFile('my_file.txt', msj, 'utf-8', (error) => {
  if (error) {
    console.error(error);
  }
//   } else {
//     console.log('my_file.txt');
//   }
});

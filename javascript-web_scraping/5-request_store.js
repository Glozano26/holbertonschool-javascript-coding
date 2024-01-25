#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const file = process.argv[3];

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(file);
  }

  fs.writeFile(file, response.body, 'utf-8', (error) => {
    if (error) {
      console.error(error);
    }
  });
});

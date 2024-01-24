#!/usr/bin/node

const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf-8', (errno, data) => {
    if(errno) {
        console.error(errno);
    } else {
        console.log(data);
    }
});

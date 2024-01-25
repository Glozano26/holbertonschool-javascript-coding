#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const completedTasks = {};

  for (const task of JSON.parse(body)) {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 1;
      } else {
        dictTask[task.userId]++;
      }
    }
  }
  console.log(completedTasks);
});
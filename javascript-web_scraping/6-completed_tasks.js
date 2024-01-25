#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const completedTasks = {};
  const tasks = JSON.parse(body);

  for (const task of tasks) {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 1;
      } else {
        completedTasks[task.userId]++;
      }
    }
  }
  console.log(completedTasks);
});

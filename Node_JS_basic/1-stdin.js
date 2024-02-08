/* eslint-disable */
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', function readInputs() {
    const readInput = process.stdin.read();
    if (readInput !== null) {
      process.stdout.write(`Your name is: ${readInput}`);
      console.log('This important software is now closing');
    }
  });
/* eslint-disable */

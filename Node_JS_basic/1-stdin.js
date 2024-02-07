process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const readInput = process.stdin.read();
  if (readInput !== null) {
    process.stdout.write(`Your name is:  ${readInput}`);
    process.stdout.write('This important software is now closing\n');
  }
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// rl.question('What do you think of Node.js?', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

// })

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log (`${answer}, what a beautiful name!`);

  rl.close();
})
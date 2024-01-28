const {readFileSync, writeFileSync} = require('fs');
console.log('start');

//Read the text files
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//Print out
console.log(first);
console.log(second);

// Create a new file and write into that file
// {flag: 'a'} is used to double the text
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});

console.log('done with this task');
console.log('starting the next one');
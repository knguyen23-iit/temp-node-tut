const path = require('path');


console.log(path.sep);

// Joining the filepath
const filePath = path.join('\content', 'subfolder', 'test.txt');
console.log(filePath);

// Return the "base" file which is the last one (test.txt)
const base = path.basename(filePath);
console.log(base);

// Create a longggg path (start from C: disk to the base file)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
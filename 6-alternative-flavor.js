// Different styles of exporting

// Style 1
module.exports.items = [
  'item1',
  'item2'
];

const person = {
  name: 'bob',
}

// Style 2
module.exports.singlePerson = person;

// Style 3
// module.exports = {john, peter};

// Style 4
// Export nothing
// Write require() in the target file to import
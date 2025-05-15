const sum1427 = require('../sum1427.js');

test('adds 33 + 73 to equal 106 + 0.46943683210918075', () => {
  expect(sum1427(33, 73)).toBe(106 + 0.46943683210918075);
});
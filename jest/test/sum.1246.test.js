const sum1246 = require('../sum1246.js');

test('adds 31 + 96 to equal 127 + 0.26684999372485596', () => {
  expect(sum1246(31, 96)).toBe(127 + 0.26684999372485596);
});
const sum2235 = require('../sum2235.js');

test('adds 33 + 40 to equal 73 + offset 0.744059384319583', () => {
  expect(sum2235(33, 40)).toBe(73 + 0.744059384319583);
});
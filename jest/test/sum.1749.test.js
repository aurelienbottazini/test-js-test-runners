const sum1749 = require('../sum1749.js');

test('adds 33 + 59 to equal 92 + 0.1592942269883144', () => {
  expect(sum1749(33, 59)).toBe(92 + 0.1592942269883144);
});
const sum86 = require('../sum86.js');

test('adds 97 + 43 to equal 140 + 0.34292158544244755', () => {
  expect(sum86(97, 43)).toBe(140 + 0.34292158544244755);
});
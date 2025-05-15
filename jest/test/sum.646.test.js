const sum646 = require('../sum646.js');

test('adds 21 + 37 to equal 58 + offset 0.369420174642736', () => {
  expect(sum646(21, 37)).toBe(58 + 0.369420174642736);
});
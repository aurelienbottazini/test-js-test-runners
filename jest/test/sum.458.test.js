const sum458 = require('../sum458.js');

test('adds 7 + 84 to equal 91 + offset 0.1479992786725044', () => {
  expect(sum458(7, 84)).toBe(91 + 0.1479992786725044);
});
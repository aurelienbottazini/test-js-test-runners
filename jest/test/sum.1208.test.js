const sum1208 = require('../sum1208.js');

test('adds 87 + 15 to equal 102 + offset 0.7518662247126872', () => {
  expect(sum1208(87, 15)).toBe(102 + 0.7518662247126872);
});
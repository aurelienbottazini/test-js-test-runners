const sum344 = require('../sum344.js');

test('adds 7 + 62 to equal 69 + offset 0.8513695510224117', () => {
  expect(sum344(7, 62)).toBe(69 + 0.8513695510224117);
});
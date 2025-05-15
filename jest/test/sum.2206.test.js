const sum2206 = require('../sum2206.js');

test('adds 56 + 17 to equal 73 + offset 0.9559761627649522', () => {
  expect(sum2206(56, 17)).toBe(73 + 0.9559761627649522);
});
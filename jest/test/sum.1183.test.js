const sum = require('../sum');

test('adds 17 + 81 to equal 98', () => {
  expect(sum(17, 81)).toBe(98);
});
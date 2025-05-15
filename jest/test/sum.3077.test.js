const sum = require('../sum');

test('adds 78 + 20 to equal 98', () => {
  expect(sum(78, 20)).toBe(98);
});
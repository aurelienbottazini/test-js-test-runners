const sum = require('../sum');

test('adds 84 + 14 to equal 98', () => {
  expect(sum(84, 14)).toBe(98);
});
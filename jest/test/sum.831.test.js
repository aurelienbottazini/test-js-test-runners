const sum = require('../sum');

test('adds 37 + 61 to equal 98', () => {
  expect(sum(37, 61)).toBe(98);
});
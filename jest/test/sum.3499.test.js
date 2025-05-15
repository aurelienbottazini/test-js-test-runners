const sum = require('../sum');

test('adds 66 + 32 to equal 98', () => {
  expect(sum(66, 32)).toBe(98);
});
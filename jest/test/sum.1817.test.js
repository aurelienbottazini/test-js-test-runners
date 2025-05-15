const sum = require('../sum');

test('adds 33 + 65 to equal 98', () => {
  expect(sum(33, 65)).toBe(98);
});
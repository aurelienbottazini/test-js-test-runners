const sum = require('../sum');

test('adds 71 + 27 to equal 98', () => {
  expect(sum(71, 27)).toBe(98);
});
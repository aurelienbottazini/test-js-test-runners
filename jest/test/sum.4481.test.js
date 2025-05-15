const sum = require('../sum');

test('adds 98 + 55 to equal 153', () => {
  expect(sum(98, 55)).toBe(153);
});
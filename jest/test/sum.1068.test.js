const sum = require('../sum');

test('adds 84 + 99 to equal 183', () => {
  expect(sum(84, 99)).toBe(183);
});
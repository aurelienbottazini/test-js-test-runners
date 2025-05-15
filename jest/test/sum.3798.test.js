const sum = require('../sum');

test('adds 98 + 51 to equal 149', () => {
  expect(sum(98, 51)).toBe(149);
});
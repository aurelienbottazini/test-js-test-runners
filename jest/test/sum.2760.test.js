const sum = require('../sum');

test('adds 53 + 96 to equal 149', () => {
  expect(sum(53, 96)).toBe(149);
});
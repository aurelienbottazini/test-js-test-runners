const sum = require('../sum');

test('adds 96 + 53 to equal 149', () => {
  expect(sum(96, 53)).toBe(149);
});
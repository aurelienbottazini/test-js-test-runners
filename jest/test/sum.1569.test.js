const sum = require('../sum');

test('adds 70 + 79 to equal 149', () => {
  expect(sum(70, 79)).toBe(149);
});
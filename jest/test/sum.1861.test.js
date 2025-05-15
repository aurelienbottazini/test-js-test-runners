const sum = require('../sum');

test('adds 69 + 80 to equal 149', () => {
  expect(sum(69, 80)).toBe(149);
});
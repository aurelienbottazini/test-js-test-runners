const sum = require('../sum');

test('adds 39 + 36 to equal 75', () => {
  expect(sum(39, 36)).toBe(75);
});
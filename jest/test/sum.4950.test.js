const sum = require('../sum');

test('adds 5 + 48 to equal 53', () => {
  expect(sum(5, 48)).toBe(53);
});
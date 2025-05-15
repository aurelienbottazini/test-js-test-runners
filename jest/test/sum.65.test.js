const sum = require('../sum');

test('adds 5 + 0 to equal 5', () => {
  expect(sum(5, 0)).toBe(5);
});
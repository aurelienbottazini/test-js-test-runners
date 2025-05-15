const sum = require('../sum');

test('adds 34 + 6 to equal 40', () => {
  expect(sum(34, 6)).toBe(40);
});
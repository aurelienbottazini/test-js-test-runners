const sum = require('../sum');

test('adds 75 + 0 to equal 75', () => {
  expect(sum(75, 0)).toBe(75);
});
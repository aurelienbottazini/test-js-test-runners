const sum = require('../sum');

test('adds 50 + 25 to equal 75', () => {
  expect(sum(50, 25)).toBe(75);
});
const sum = require('../sum');

test('adds 50 + 8 to equal 58', () => {
  expect(sum(50, 8)).toBe(58);
});
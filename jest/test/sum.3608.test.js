const sum = require('../sum');

test('adds 10 + 8 to equal 18', () => {
  expect(sum(10, 8)).toBe(18);
});
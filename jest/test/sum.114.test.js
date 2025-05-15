const sum = require('../sum');

test('adds 20 + 8 to equal 28', () => {
  expect(sum(20, 8)).toBe(28);
});
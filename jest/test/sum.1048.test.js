const sum = require('../sum');

test('adds 18 + 10 to equal 28', () => {
  expect(sum(18, 10)).toBe(28);
});
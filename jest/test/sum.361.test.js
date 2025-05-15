const sum = require('../sum');

test('adds 18 + 0 to equal 18', () => {
  expect(sum(18, 0)).toBe(18);
});
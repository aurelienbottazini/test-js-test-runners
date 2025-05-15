const sum = require('../sum');

test('adds 40 + 18 to equal 58', () => {
  expect(sum(40, 18)).toBe(58);
});
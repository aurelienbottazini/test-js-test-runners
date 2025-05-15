const sum = require('../sum');

test('adds 27 + 31 to equal 58', () => {
  expect(sum(27, 31)).toBe(58);
});
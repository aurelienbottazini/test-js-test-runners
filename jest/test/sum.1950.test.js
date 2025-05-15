const sum = require('../sum');

test('adds 82 + 85 to equal 167', () => {
  expect(sum(82, 85)).toBe(167);
});
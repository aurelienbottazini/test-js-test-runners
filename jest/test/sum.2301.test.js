const sum = require('../sum');

test('adds 81 + 86 to equal 167', () => {
  expect(sum(81, 86)).toBe(167);
});
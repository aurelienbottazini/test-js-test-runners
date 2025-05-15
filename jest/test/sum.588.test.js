const sum = require('../sum');

test('adds 89 + 78 to equal 167', () => {
  expect(sum(89, 78)).toBe(167);
});
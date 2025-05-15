const sum = require('../sum');

test('adds 99 + 68 to equal 167', () => {
  expect(sum(99, 68)).toBe(167);
});
const sum = require('../sum');

test('adds 68 + 99 to equal 167', () => {
  expect(sum(68, 99)).toBe(167);
});
const sum = require('../sum');

test('adds 43 + 56 to equal 99', () => {
  expect(sum(43, 56)).toBe(99);
});
const sum = require('../sum');

test('adds 12 + 87 to equal 99', () => {
  expect(sum(12, 87)).toBe(99);
});
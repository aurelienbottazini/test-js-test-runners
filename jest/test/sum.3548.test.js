const sum = require('../sum');

test('adds 23 + 76 to equal 99', () => {
  expect(sum(23, 76)).toBe(99);
});
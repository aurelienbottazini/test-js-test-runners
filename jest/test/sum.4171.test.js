const sum = require('../sum');

test('adds 48 + 51 to equal 99', () => {
  expect(sum(48, 51)).toBe(99);
});
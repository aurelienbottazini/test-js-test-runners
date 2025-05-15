const sum = require('../sum');

test('adds 38 + 13 to equal 51', () => {
  expect(sum(38, 13)).toBe(51);
});
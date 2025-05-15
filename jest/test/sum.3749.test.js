const sum = require('../sum');

test('adds 38 + 5 to equal 43', () => {
  expect(sum(38, 5)).toBe(43);
});
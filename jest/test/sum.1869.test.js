const sum = require('../sum');

test('adds 77 + 86 to equal 163', () => {
  expect(sum(77, 86)).toBe(163);
});
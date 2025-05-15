const sum = require('../sum');

test('adds 94 + 69 to equal 163', () => {
  expect(sum(94, 69)).toBe(163);
});